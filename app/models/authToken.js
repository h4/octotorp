define([
    'backbone',
    'config'
], function (Backbone, config) {
    var AuthToken = Backbone.Model.extend({
        url: config.authURL,

        fetchToken: function() {
            return this.fetch()
        },

        getToken: function() {
            return this.get('auth_token');
        }
    });

    return new AuthToken();
});