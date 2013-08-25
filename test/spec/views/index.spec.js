define([
    'underscore',
    'views/index'
], function (_, IndexView) {
    describe('Index view', function() {
        beforeEach(function() {
            loadFixtures('layout.html');
            this.view = new IndexView();
        });

        it('looks like a Backbone view', function() {
            expect(this.view.el).toBeDefined();
            expect(this.view.render).toBeDefined();
            expect(_.isFunction(this.view.render)).toBeTruthy();
        });

        it('renders a div.results', function() {
            expect(this.view.render().$el).toBe('div.result');
        });
    });

    return {};
});
