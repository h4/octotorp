/**
 * Главный файл приложения
 */
define([
    'router',
    'views/layout',
    'views/search'
], function (Router, LayoutView, SearchView) {
    var initialize = function() {
        var layout = new LayoutView();
        var search = new SearchView();
        layout.render().$el.appendTo($('body'));
        search.render().$el.appendTo(layout.$('.search'));

        Router.initialize({
            layoutView: layout
        });

        Backbone.on("domchange:title", function(title) {
            $(document).attr('title', title);
        });
    };

    return {
        initialize: initialize
    };
});
