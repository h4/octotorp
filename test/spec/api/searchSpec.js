var search = require('../../../api/search');
var getTweets = search.getTweets;

describe("API auth", function() {
    it("getToken should to be defined", function() {
        expect(getTweets).toBeDefined();
    });

    it("getTweets should return result object", function(done) {
        getTweets("nodeJs", function(result) {
            var code = result.code;
            var data = JSON.parse(result.data);

            expect(code).toEqual(200);
            expect(data.statuses.length).toEqual(15);
            done();
        });
    });

    it("getTweets should return error when query not passed", function(done) {
        var query;
        getTweets(query, function(result) {
            var code = result.code;

            expect(code).toEqual(400);
            done();
        });
    });

    it("getTweets should return error when query is empty", function(done) {
        var query = ""
        getTweets(query, function(result) {
            var code = result.code;

            expect(code).toEqual(400);
            done();
        });
    });
});
