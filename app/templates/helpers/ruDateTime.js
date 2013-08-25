define('templates/helpers/ruDateTime', [
    'handlebars'
], function (Handlebars) {
    function twoDigit(num) {
        if (num < 10) {
            return "0" + num;
        } else {
            return num;
        }
    }

    function ruDateTime(context) {
        var date = new Date(context);

        if (isNaN(date.getDate())) {
            return context;
        }
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();

        return day + "." + twoDigit(month) + "." + year + " в " + twoDigit(hours) + ":" + twoDigit(minutes);
    }

    Handlebars.registerHelper('ruDateTime', ruDateTime);
    return ruDateTime;
});
