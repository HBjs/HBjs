var expect = require('chai').expect;

var fs = require("fs");

describe("Check system settings", function(){
    it("Should exist config file", function(cb){
        fs.stat("configs.js", function(err, data){
            expect(data).to.not.undefined;
            cb();
        });
    });

    describe("Should exist mandatory params", function(){
        var file = require("../../configs");

        it("General", function(){
            expect(file.general.secure).to.be.exist;
            expect(file.general.url).to.be.exist;
            expect(file.general.public_dir).to.be.exist;
            expect(file.general.lang).to.be.exist;
        });

        it("Server", function(){
            expect(file.server.port).to.be.exist;
        });

        describe("Auth", function(){
            it("Google", function(){
                expect(file.auth.google.key).to.be.exist;
                expect(file.auth.google.secret).to.be.exist;
                expect(file.auth.google.callback).to.be.exist;
            });

            it("Facebook", function(){
                expect(file.auth.facebook.clientID).to.be.exist;
                expect(file.auth.facebook.secret).to.be.exist;
                expect(file.auth.facebook.callback).to.be.exist;
            });

            it("Twitter", function(){
                expect(file.auth.twitter.consumerKey).to.be.exist;
                expect(file.auth.twitter.secret).to.be.exist;
                expect(file.auth.twitter.callback).to.be.exist;
            });

        });


        it("DataBase", function(){
            expect(file.db.host).to.be.exist;
            expect(file.db.port).to.be.exist;
            expect(file.db.user).to.be.exist;
            expect(file.db.password).to.be.exist;
            expect(file.db.database).to.be.exist;
        });
    });
});