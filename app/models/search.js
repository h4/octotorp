define([
    'backbone',
    'collections/tweets'
], function (Backbone, TweetsCollection) {
    var SearchModel = Backbone.Model.extend({
        baseUrl: '/api',
        url: function() {
            return this.baseUrl + "?q=" + this.query.q;
        },

        initialize: function() {
            this.set('tweets', new TweetsCollection());
        },

        parse: function(data) {
            this.get('tweets').add(data, {parse: true});
            data.search_metadata.query = decodeURIComponent(data.search_metadata.query).replace(/^#/, '');

            return data.search_metadata
        },

        getTweets: function(query) {
            this.query = query;
            this.fetch();
        }
    });

    return SearchModel;
});
