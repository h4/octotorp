define([
    'underscore',
    'backbone',
    'collections/tweets'
], function(_, Backbone, Collection) {
    function getParameterByName(url, name) {
        var params = url.split("?")[1].split("&");

        return params.reduce(function(prev, item) {
            var res = item.split("=");
            if (res[0] === name) {
                return res[1];
            }
        }, undefined);
    }

    describe("Tweets collection test", function() {
        beforeEach(function() {
            this.tweets = new Collection();
            this.server = sinon.fakeServer.create();
            this.server.respondWith("GET", "/", [
                200,
                { "Content-Type": "application/json" },
                '{"statuses": [{"id": 1, "user": {}}, {"id": 3, "user": {}}]}'
            ]);
        });

        afterEach(function() {
            this.server.restore();
        });

        it("looks like Backbone collection", function() {
            expect(this.tweets.get).toBeDefined();
            expect(this.tweets.length).toBeDefined();
            expect(this.tweets.model).toBeDefined();
        });

        it("should send 'q' param to server", function() {
            this.tweets.fetch({data: {q: "nodejs"}});
            expect(getParameterByName(this.server.requests[0].url, 'q')).toBeDefined();
        });

        it("should save tweets correctly", function() {
            expect(this.tweets.length).toEqual(0);
            this.tweets.fetch();
            this.server.respond();
            expect(this.tweets.length).toEqual(2);
        });
    });
});
