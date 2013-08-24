define([
    'backbone',
    'collections/tweets'
], function (Backbone, TweetsCollection) {
    var SearchModel = Backbone.Model.extend({
        baseUrl: '/',
        url: function() {
            return this.baseUrl + "?q=" + this.query.q;
        },

        defaults: {
            tweets: new TweetsCollection()
        },

        parse: function(data) {
            this.get('tweets').add(data);

            return data.search_metadata
        },

        getTweets: function(query) {
            this.query = query;
            this.fetch();
        }
    });

    return SearchModel;
});
