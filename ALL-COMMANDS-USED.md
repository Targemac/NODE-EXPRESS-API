npm init

npm install --save express

"type": "module", <!-- adding this line  enables us to use the import statemennt -->
npm install --save-dev nodemon <!-- this enables automatic reload when tere is any change to the application during development stage -->

"start": "nodemon index.js" <!-- adding this line would ensure we start our application using nodemon [npm start] -->

npm install uuid <!-- npm package for generating unique id's -->