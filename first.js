//Import project packages.
let http = require("http");
let url = require("url");
let fs = require("fs");


//Create a server object:
http.createServer(function (req, res) {

  //Find out what file the user is requesting.
  let fullReqFile = "info.txt";
  res.setHeader('Access-Control-Allow-Origin', '*');
  //Read the file and responds to the request.
  fs.readFile(fullReqFile, function(err, data){
      if(err){
          res.write(err);
      }else{
        res.write(data); //write a response to the client
      }
    res.end(); //end the response
  });
}).listen(8080); //the server object listens on port 8080 