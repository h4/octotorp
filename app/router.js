/**
 * Роутер
 */
define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var AppRouter;
    var initialize;

    AppRouter = Backbone.Router.extend({
        routes: {

        }
    });

    initialize = function() {
        var appRouter = new AppRouter;

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});