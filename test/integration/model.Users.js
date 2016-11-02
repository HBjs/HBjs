var chai = require('chai'),
    expect = chai.expect,
    should = chai.should;
var Users = require("../../app/services/Users");

describe("Users CRUD", function(){

    it("Creating user", function(done){
        Users.createUser("local", null, "tessst@bk.ru", null, null, "123456").then(function(res){
            expect(res).to.be.true;
            done();
        }, done);
    });
});