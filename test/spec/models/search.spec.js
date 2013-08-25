define([
    'underscore',
    'models/search'
], function (_, SearchModel) {
    describe("Search model test", function() {
        beforeEach(function() {
            this.search = new SearchModel();
            this.search.url = '/?q=nodejs';
            this.fixture = {
                "statuses": [
                    {
                        "id": 1,
                        "user": {}
                    }, {
                        "id": 2,
                        "user": {}
                    }, {
                        "id": 3,
                        "user": {}
                    }
                ],
                "search_metadata": {
                    "query": "nodejs"
                }
            };
            this.query = {q: "nodejs"};
            this.server = sinon.fakeServer.create();
            this.server.respondWith("GET", "/?q=nodejs", [
                200,
                { "Content-Type": "application/json" },
                JSON.stringify(this.fixture)
            ]);
        });

        afterEach(function() {
            this.server.restore();
        });

        it('looks like a Backbone model', function() {
            expect(_.isFunction(this.search.get)).toBe(true);
            expect(_.isFunction(this.search.set)).toBe(true);
        });

        it('has a "tweets" property', function() {
            expect(this.search.get('tweets')).toBeDefined();
            expect(this.search.get('tweets').models).toBeDefined();
        });

        it('should get a tweets by query', function() {
            expect(this.search.getTweets).toBeDefined();
            expect(_.isFunction(this.search.getTweets)).toBeDefined();
            this.search.getTweets(this.query);
            this.server.respond();
            expect(this.search.get('query')).toEqual(this.query.q);
        });

        it('should save tweets to collecton', function() {
            this.search.getTweets(this.query);
            this.server.respond();
            expect(this.search.get('tweets').length).toEqual(this.fixture.statuses.length);
        });
    });
});
