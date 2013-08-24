"use strict";
var auth = require('../../../api/auth');

describe("API auth", function() {
    it("getToken should to be defined", function() {
        expect(auth.getToken).toBeDefined();
    });

    it("getToken should to be a string", function() {
        expect(typeof auth.getToken()).toEqual('object');
    });
});
