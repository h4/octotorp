define([
    'backbone',
    'models/search',
    'hbs!templates/result'
], function (Backbone, SearchModel, template) {
    var ResultView = Backbone.View.extend({
        el: 'div.result',

        initialize: function(options) {
            this.options = options;
            this.model = new SearchModel();
            this.model.getTweets({
                q: this.options.query
            });
            this.model.on('sync', this.render, this)
        },

        render: function(model) {
            var data;
            if (model) {
                data = model.toJSON();
                data.tweets = data.tweets.toJSON();
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
