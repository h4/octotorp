define([
    'underscore',
    'models/tweet'
    ], function(_, TweetModel) {

    describe("Tweet model test", function() {
        beforeEach(function() {
            this.tweet = new TweetModel({}, {url: "/"});
            this.server = sinon.fakeServer.create();
            this.server.respondWith(
                "GET",
                "/",
                [
                    200,
                    {"Content-Type": "application/json"},
                    '{"id": 1, "user": {"id": 1}}'
                ]
            );
            this.eventSpy = sinon.spy();
        });

        afterEach(function() {
            this.server.restore();
        });

        it("looks like a Backbone model", function() {
            expect(_.isFunction(this.tweet.get)).toBe(true);
            expect(_.isFunction(this.tweet.set)).toBe(true);
        });

        it("Must filter data", function() {
            this.tweet.fetch();
            this.server.respond();
            expect(typeof this.tweet.get("user")).toBe("number");
        });
    });
});
