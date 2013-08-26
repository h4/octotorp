define([
    'underscore',
    'backbone',
    'models/search',
    'hbs!templates/result'
], function (_, Backbone, SearchModel, template) {
    var ResultView = Backbone.View.extend({
        el: 'div.result',

        initialize: function(options) {
            this.options = options;
            this.model = new SearchModel();
            this.model.getTweets(this.formatQuery());
            this.model.on('sync', this.render, this);
            Backbone.trigger("domchange:title", this.options.query + " — Поиск по хештегу" );
        },

        formatQuery: function() {
            var query = this.options.query;

            if (query.indexOf('#') !== 0) {
                query = "#" + query;
            }
            return {
                q: encodeURIComponent(query)
            }
        },

        render: function(model) {
            var data;
            if (model) {
                data = model.toJSON();
                data.tweets = data.tweets.toJSON();
                data.showResults = true;
            } else {
                data = this.options;
            }
            var html = template(data);
            this.$el.html(html);
            return this;
        }
    });

    return ResultView;
});
