define([
    'underscore',
    'backbone',
    'collections/users'
], function(_, Backbone, UsersCollection) {
    describe('Users collection test', function() {
        beforeEach(function() {
            this.users = new UsersCollection();
        });

        it('looks like Backbone collection', function() {
            expect(_.isFunction(this.users.get)).toBeTruthy();
            expect(this.users.length).toBeDefined();
            expect(this.users.model).toBeDefined();
        });
    });
});
