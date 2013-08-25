define([
    'templates/helpers/ruDateTime'
], function (helper) {
    describe('ruDateTime helper', function() {
        it("should parse valid date string", function() {
            var tzOffset = (new Date()).getTimezoneOffset() / 60;
            var hours = 12 -tzOffset;
            var validDate = "25.08.2013 в " + hours + ":00";

            expect(helper("Sun Aug 25 12:00:00 +0000 2013")).toEqual(validDate);
        });

        it("should return origin data if it not valid date", function() {
            expect(helper("string")).toEqual("string");
        });
    });
});
