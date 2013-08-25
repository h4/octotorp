define([
    'templates/helpers/parseHashtags'
], function (helper) {
    describe('parseHashtags helper', function() {
        it("should return string with links", function() {
            var onehashtag = '<p>' + helper("I like #nodejs") + '</p>';
            var twohashtag = '<p>' + helper("I like #nodejs #backbone") + '</p>';
            var nodeLink = "<a href='/search/nodejs'>#nodejs</a>";
            var backboneLink = "<a href='/search/backbone'>#backbone</a>";

            expect($(onehashtag)).toContainHtml(nodeLink);
            expect($(twohashtag)).toContainHtml(nodeLink);
            expect($(twohashtag)).toContainHtml(backboneLink);
        });

        it("should pass nonSting input", function() {
            var wrappedNumber = helper(3);

            expect(wrappedNumber).toEqual(3);
        });
    });
});
