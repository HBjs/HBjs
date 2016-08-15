var expect = require('chai').expect;
var Users = require("../app/models/Users");

describe("Users CRUD", function(){
    it("Creating user", function(){
        var user = Users.createUser("sindbad911@bk.ru", "Serge Garkusha", "123456");

        expect(user).to.be.true;
    });
});