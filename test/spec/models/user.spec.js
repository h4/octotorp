define([
    'underscore',
    'models/user'
], function (_, UserModel) {
    describe('User model test', function() {
        beforeEach(function() {
            this.user = new UserModel();
        });

        it('looks like a Backbone model', function() {
           expect(_.isFunction(this.user.get)).toBe(true);
           expect(_.isFunction(this.user.set)).toBe(true);
        });
    });
});
