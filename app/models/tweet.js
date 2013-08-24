define([
    'jquery',
    'underscore',
    'backbone',
    'config'
], function ($, _, Backbone) {
    var TweetModel = Backbone.Model.extend({
        /**
         * Сохраняем в модели только id автора твита
         * @param data
         * @returns {*}
         */
        parse: function(data) {
            var user = data.user || {};
            data.user = user.id;

            return data;
        }
    });

    return TweetModel;
});
