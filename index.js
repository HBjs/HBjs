var app = require("./app.js");
var http = require("http");
var configs = require("./configs.js");


var instance = http.createServer(app);

instance.listen(configs.server.port);
instance.on('error', function(error){
    if(error.code == "EADDRINUSE"){
        console.error('Port ' + configs.server.port + ' is already in use');
        process.exit(1);
    }else{
        console.error(error);
        process.exit(1);
    }
});

instance.on('listening', function(){
    console.log("Server running at 127.0.0.1:" + configs.server.port);
    console.log(((configs.general.secure) ? "https://" : "http://") + configs.general.url);
});