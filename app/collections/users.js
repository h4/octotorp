define([
    'backbone',
    'models/user'
], function (Backbone, UserModel) {
    var UsersCollection = Backbone.Collection.extend({
        models: UserModel
    });

    return UsersCollection;
});
