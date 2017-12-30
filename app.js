//requiring core modules
const express = require('express');
const path = require('path');

//requiring custom modules
const indexRoutes = require('./routes/index.routes');
//initialisong express app
const app = express();

//Middlewares
app.use(express.static(path.join(__dirname,'public')));
app.use('/',indexRoutes);



//initialising port
app.set('PORT',(3000 || process.env.PORT));
//initialisng server on port 8080
const server = app.listen((process.env.PORT || 3000),()=>{
  const port = server.address().port;
  console.log("Server Started On PORT : ",port);
});
