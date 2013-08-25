define([
    'backbone',
    'collections/tweets'
], function (Backbone, TweetsCollection) {
    var SearchModel = Backbone.Model.extend({
        baseUrl: 'http://localhost:8080/',
        url: function() {
            return this.baseUrl + "?q=" + this.query.q;
        },

        defaults: {
            tweets: new TweetsCollection()
        },

        parse: function(data) {
            this.get('tweets').add(data, {parse: true});

            return data.search_metadata
        },

        getTweets: function(query) {
            this.query = query;
            this.fetch();
        }
    });

    return SearchModel;
});
