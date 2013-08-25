define([
    'underscore',
    'models/tweet'
    ], function(_, TweetModel) {

    describe("Tweet model test", function() {
        beforeEach(function() {
            this.tweet = new TweetModel({}, {url: "/"});
            this.server = sinon.fakeServer.create();
            this.fixture = {"id": 1, "user": {"id": 1}};
            this.server.respondWith(
                "GET",
                "/",
                [
                    200,
                    {"Content-Type": "application/json"},
                    JSON.stringify(this.fixture)
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

        it("should sent user object", function() {
            this.tweet.on('addUser', this.eventSpy);
            this.tweet.fetch();
            this.server.respond();

            expect(this.eventSpy.called).toBeTruthy();
            expect(this.eventSpy.calledWith(this.fixture.user)).toBeTruthy();
        });
    });
});
