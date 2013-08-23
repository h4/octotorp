define([
    'jquery',
    'models/authToken'
], function ($, authToken) {
    return {
        initialize: function() {
            var token = authToken.getToken();
            var setHeader = function() {
                $.ajaxSetup({
                    'headers': {
                        'Authorization': 'Bearer ' + token
                    }
                });
            };

            if (!token) {
                authToken.fetchToken().success(function() {
                    token = authToken.getToken();
                    setHeader();
                });
            } else {
                setHeader();
            }
        }
    };
});
