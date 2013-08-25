define('templates/helpers/parseHashtags', [
    'underscore',
    'handlebars'
], function (_, Handlebars) {
    function parseHashtags(context) {
        var pattern = /#([^\s]+)/g;

        if (_.isString(context)) {
            return context.replace(pattern, "<a href='/search/$1'>#$1</a>");
        } else {
            return context;
        }
    }

    Handlebars.registerHelper('parseHashtags', parseHashtags);
    return parseHashtags;
});
