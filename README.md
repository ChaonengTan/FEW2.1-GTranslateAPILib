![npm (scoped)](https://img.shields.io/npm/v/@chaonengtan/few2.1-gtranslateapilib) ![GitHub repo size](https://img.shields.io/github/repo-size/ChaonengTan/FEW2.1-GTranslateAPILib) ![GitHub issues](https://img.shields.io/github/issues/ChaonengTan/FEW2.1-GTranslateAPILib) 
API Source: https://english.api.rakuten.net/googlecloud/api/google-translate1

About:
A twist on rakuten's google translate API
for personal use but also if anyone else wants

How to use:
note* : REQUIRES APIKEY FROM API Source!!!
1) require module
2) create new gt object with perameter APIKEY
3) call any function part of this package

Includes:
.translate([payload], [targetLanguage(default=english)], [sourceLanguage(optional)]) =>
  returns JSON.parsed Promise
.previous() =>
  returns previous JSON data
.setKey([newApiKey]) =>
  changes APIKEY to newApiKey