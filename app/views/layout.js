define([
    'backbone',
    'hbs!templates/layout'
], function (Backbone, template) {
    var IndexView = Backbone.View.extend({
        className: "main-container",

        render: function() {
            var html = template();
            this.$el.html(html);
            return this;
        }
    });

    return IndexView;
});
