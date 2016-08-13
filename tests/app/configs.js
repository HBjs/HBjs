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
        });

        it("Server", function(){
            expect(file.server.port).to.be.exist;
        });


        it("DataBase", function(){
            expect(file.db.host).to.be.exist;
            expect(file.db.port).to.be.exist;
            expect(file.db.user).to.be.exist;
            expect(file.db.password).to.be.exist;
            expect(file.db.name).to.be.exist;
        });
    });
});