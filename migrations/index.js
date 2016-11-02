var Users = require("../app/models/Users");

Users.sync({force: true}).then(function(){
    console.log("|Users table was created|");
});