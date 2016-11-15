var expect = require('chai').expect;
var Stories = require("../../app/services/Stories");

describe("Stories", function(){

    it("Creating story", function(done){
        Stories.createStory(1, 2, "Title story", null, null, null, null, [1,2]).then(function(res){
            expect(res).to.exist;
            expect(res).to.be.an('object');
            done();
        }, done);
    });

});