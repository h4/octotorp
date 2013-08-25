define([
    'backbone',
    'hbs!templates/search',
], function (Backbone, template) {
    var SearchView = Backbone.View.extend({
        events: {
            'submit': 'submitHandler'
        },

        submitHandler: function(e) {
            Backbone.history.navigate('/search/' + this.getQuery(), {trigger: true});
            e.preventDefault();
        },

        getQuery: function() {
            return this.$('.form-control').val();
        },

        render: function() {
            var html = template();
            this.$el.html(html);
            return this;
        }
    });

    return SearchView;
});
