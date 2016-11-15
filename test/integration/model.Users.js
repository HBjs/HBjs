var expect = require('chai').expect;
var Users = require("../../app/services/Users");

describe("Users", function(){

    it("Creating user (Local auth)", function(done){
        Users.createUser("local", null, "tessst@bk.ru", null, null, "123456").then(function(res){
            expect(res).to.exist;
            expect(res).to.be.an('object');
           done();
        }, done);
    });

    it("Creating user (Local auth) with error", function(done){
        Users.createUser("local").then(done, function(e){
            expect(e).to.exist;
            done();
        });
    });

    it("Creating user (Twitter auth)", function(done){
        Users.createUser("twitter", "1235454455454", null, "John", "Doe", null).then(function(res){
            expect(res).to.exist;
            expect(res).to.be.an('object');
           done();
        }, done);
    });

    it("Creating user (Google auth)", function(done){
        Users.createUser("google", "1235454455454", null, "John", "Doe", null).then(function(res){
            expect(res).to.exist;
            expect(res).to.be.an('object');
           done();
        }, done);
    });

    it("Creating user (Facebook auth)", function(done){
        Users.createUser("facebook", "1235454455454", null, "John", "Doe", null).then(function(res){
            expect(res).to.exist;
            expect(res).to.be.an('object');
           done();
        }, done);
    });

    it("Find user by email", function(done){
        Users.findUserByEmail("tessst@bk.ru", "123456").then(function(res){
            expect(res).to.exist;
            expect(res).to.be.an('object');
            done();
        }, done);
    });

    it("Find user by social id (Facebook)", function(done){
        Users.findUserBySocialId("facebook", "1235454455454").then(function(res){
            expect(res).to.exist;
            expect(res).to.be.an('object');
           done();
        }, done);
    });

    it("Find user by social id (Google)", function(done){
        Users.findUserBySocialId("google", "1235454455454").then(function(res){
            expect(res).to.exist;
            expect(res).to.be.an('object');
           done();
        }, done);
    });

    it("Find user by social id (Twitter)", function(done){
        Users.findUserBySocialId("twitter", "1235454455454").then(function(res){
            expect(res).to.exist;
            expect(res).to.be.an('object');
           done();
        }, done);
    });

    it("Find used email (checking before auth)", function(done){
        Users.findUsedEmail("tessst@bk.ru").then(function(res){
            expect(res).to.exist;
            expect(res).to.be.an('object');
           done();
        }, done);
    });

    it("Get user by ID", function(done){
        Users.getUserById(1).then(function(res){
            expect(res).to.exist;
            expect(res).to.be.an('object');
           done();
        }, done);
    });


});