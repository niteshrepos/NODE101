var express = require('express'),
http = require("http");
var app = express();

app.configure(function(){
  app.use(express.cookieParser());
});

app.get("/name/:name", function(req, res){
  
})



http.createServer(app).listen(3000, function(){
  console.log("Express server listening on port " + 3000);
});
