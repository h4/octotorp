define([
    'backbone',
    'hbs!templates/index'
], function (Backbone, template) {
    var IndexView = Backbone.View.extend({
        el: 'div.result',

        initialize: function() {
            Backbone.trigger("domchange:title", "Octotorp — главная");
        },

        render: function() {
            var html = template();
            this.$el.html(html);
            return this;
        }
    });

    return IndexView;
});
