//core modules
const OAuth2 = require('oauth').OAuth2;

//vars
const clientId = clientId;
const clientSecret = clientSecret;
const oauth2 = new OAuth2(
  clientId,
  clientSecret,
  'https://accounts.spotify.com/',
  null,
  'api/token',
  null);
//make gotAuth promise
const gotAuth = new Promise((resolve,reject)=>{
  oauth2.getOAuthAccessToken('',{'grant_type':'client_credentials'},
    (err, access_token, refresh_token,results)=>{
      if(access_token){
        resolve(access_token);
      }else if(err){
        reject(err);
      }
   });
});

module.exports = gotAuth;
