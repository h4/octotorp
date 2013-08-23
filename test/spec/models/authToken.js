define([
    'models/authToken'
], function (authToken) {
        describe('authToken test', function() {
            it('Must be defined', function() {
                expect(authToken).toBeDefined();
            });

            it('Must be an instance', function() {
                expect(_.isFunction(authToken.get)).toBe(true);
                expect(_.isFunction(authToken.set)).toBe(true);
            });

            it('Must return token string', function() {
                expect(authToken.getToken).toBeDefined();
                authToken.set({'auth_token': 'ABC'});

                expect(_.isString(authToken.getToken())).toBe(true);
            });
        });
    }
);
