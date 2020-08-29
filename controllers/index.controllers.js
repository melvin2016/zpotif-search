//====modules
const request = require("request");
const rp = require("request-promise");
const auth = require("../auth/oauth2");
//====making token Promise
let authToken;
auth.then((token) => {
  authToken = token;
});

//====route controllers
const searchAlbum = (req, res) => {
  //----Search
  const reqUrl = `https://api.spotify.com/v1/search?q=${req.params.query}&type=album`;
  const options = {
    uri: reqUrl,
    qs: { access_token: authToken },
    headers: { "User-Agent": "Request-Promise" },
    json: true,
  };
  rp(options)
    .then((data) => {
      res.json({ message: data });
    })
    .catch((err) => {
      res.json({ message: err });
    });
};

const album = (req, res) => {
  //----album
  const reqUrl = `https://api.spotify.com/v1/albums/${req.params.id}`;
  const options = {
    uri: reqUrl,
    qs: { access_token: authToken },
    headers: { "User-Agent": "Request-Promise" },
    json: true,
  };
  rp(options)
    .then((data) => {
      res.json({ message: data });
    })
    .catch((err) => {
      res.json({ message: err });
    });
};

//====Exporting modules
module.exports = {
  album: album,
  searchAlbum: searchAlbum,
};
