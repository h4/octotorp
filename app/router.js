/**
 * Роутер
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/index',
    'views/result'
], function ($, _, Backbone, IndexView, ResultView) {
    var AppRouter;
    var initialize;

    AppRouter = Backbone.Router.extend({
        initialize: function(params) {
            this.params = params;
        },

        routes: {
            '': function() {
                var indexView = new IndexView();
                indexView.render();
            },
            'search/:query': function(query) {
                var resultView = new ResultView({query: query});
                resultView.render();
            }
        }
    });

    initialize = function(params) {
        var appRouter = new AppRouter(params);

        Backbone.history.start({
            pushState: true
        });

        Backbone.history.navigate('', {trigger: true});

        return appRouter;
    };

    return {
        initialize: initialize
    };
});
