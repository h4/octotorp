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
    };

    return {
        initialize: initialize
    };
});
