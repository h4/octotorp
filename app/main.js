require.config({
    baseUrl: "app",
    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        backbone: "../libs/backbone/backbone",
        bootstrap: "../libs/bootstrap/dist/js/bootstrap",
        handlebars: "../libs/require-handlebars-plugin/Handlebars",
        jquery: "../libs/jquery/jquery",
        underscore: "../libs/lodash/dist/lodash.underscore",
        hbs: "../libs/require-handlebars-plugin/hbs",
        json2: "../libs/require-handlebars-plugin/hbs/json2",
        i18nprecompile: "../libs/require-handlebars-plugin/hbs/i18nprecompile"
    },
    hbs: {
        disableI18n: true
    }
});

require([
    'app',
    'models/tweet'
], function(App, TweetModel) {
    App.initialize();

    setTimeout(function() {
        var tweet = new TweetModel();

        tweet.fetch()
    }, 2000);

});