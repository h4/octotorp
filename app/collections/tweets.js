define([
    'jquery',
    'underscore',
    'backbone',
    'models/tweet'
], function ($, _, Backbone, TweetModel) {
    var TweetCollection = Backbone.Collection.extend({
        url: '/',

        model: TweetModel,

        /**
         * Преобразуем данные, приходящие от сервера
         * @param {Object} data данные от api
         *  - {Array} statuses
         *  - {Object} search_metadata
         * @returns {Array} списко твитов
         */
        parse: function(data) {
            return data.statuses;
        }
    });

    return TweetCollection;
});
