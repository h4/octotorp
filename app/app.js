/**
 * Главный файл приложения
 */
define([
    'router',
    'sync'
], function (Router, sync) {
    var initialize = function() {
        sync.initialize();
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});
