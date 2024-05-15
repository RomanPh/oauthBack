const express = require('express')
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require("./routes/index");

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
  }));

const cookieSession = require('cookie-session')
const passport = require('passport');

require('./passport')

app.use(cookieSession({
  name: 'token',
  keys: ['key1'],
  
}));
app.use(cookieParser({secret: 'mySecret'}));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(5000,()=>{
    console.log('Serve is up and running at the port 5000')
})