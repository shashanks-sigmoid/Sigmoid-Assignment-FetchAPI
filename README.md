# Sigmoid-Assignment-FetchAPI

Foolo the below points to run this ReactJS Project.

* Download the code using this [link](https://github.com/shashanks-sigmoid/Sigmoid-Assignment-FetchAPI/archive/refs/heads/main.zip).
* Go to this [link](https://developers.google.com/oauthplayground/?code=4/0AWtgzh5u6kvlO_oJsGfGK5pEwtIgnoOXjPaFTcI86zaFWhM_TV-g_XGiKAs4z7Uzc1v59Q&scope=https://www.googleapis.com/auth/spreadsheets) to authorize Google Sheet API. In Step 1 of this link select https://www.googleapis.com/auth/spreadsheets and click on Authorize API. Then in step 2 of this link click on Exchange Authorization code for token. It will generate access token, copy that token and save it somewhere.
* Now make .env file in root directory of project and add the token that you have saved in step 2.

  `REACT_APP_PRIVATE_KEY=youraccesstoken`
* Now run below command to start the project.

  `npm install && npm start`
