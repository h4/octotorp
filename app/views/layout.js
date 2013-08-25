define([
    'backbone',
    'hbs!templates/layout'
], function (Backbone, template) {
    var IndexView = Backbone.View.extend({
        className: "main-container",

        events: {
            "click a": "linkHandler"
        },

        linkHandler: function(e) {
            var href = $(e.currentTarget).attr('href');
            Backbone.history.navigate(href, {trigger: true});
            e.preventDefault();
            e.stopPropagation();
        },

        render: function() {
            var html = template();
            this.$el.html(html);
            return this;
        }
    });

    return IndexView;
});
