let http = require("http");
const express = require("express");

let app = express();
let port = 3000;
app.set('view engine', 'pug');
app.set('views','./views');


app.get('/home', (req, res) => {
    res.render('first_view')
  })

 
  app.get('/service', (req, res) => {
    res.render('service')
  })
  app.get('/contact', (req, res) => {
    res.render('contact')
  })

  const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }
    app.use(requestTime)
  
  app.get('/req', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
  })


app.listen(port, () => {
  console.log("the server " + port + " has started");
});
