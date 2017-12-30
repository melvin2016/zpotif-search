//core modules
const OAuth2 = require('oauth').OAuth2;

//vars
const clientId = 'fc2f96fe1b9f4dd9b7d0bfeaafd1f0b5';
const clientSecret = '6a359744f6c941f5aa999691e702b5c4';
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
