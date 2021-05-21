const dotenv =  require('dotenv');
dotenv.config();
const express = require('express');
const app =  express();
const PORT = process.env.PORT;
const router = require('./app/router')
const expressSession = require('express-session');

app.set('view engine','ejs');
app.set('views','./app/views');
app.use(express.static(__dirname + '/public'));
app.use(expressSession({
    resave:true,
    saveUninitialized:true,
    secret:process.env.CRYPTAGE,
    cookie: {
        secure: false,
        maxAge: (1000*60*60) // ça fait une heure
      }
}))

app.use(router);
app.use




app.listen(PORT ,() => {
    console.log (`Serveur connecté http://localhost:${PORT}`)
});
