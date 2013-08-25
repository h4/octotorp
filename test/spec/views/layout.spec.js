define([
    'underscore',
    'views/layout'
], function (_, LayoutView) {
    describe('Layout view', function() {
        beforeEach(function() {
            loadFixtures('layout.html');
            this.view = new LayoutView();
        });

        it('looks like a Backbone view', function() {
            expect(this.view.el).toBeDefined();
            expect(this.view.render).toBeDefined();
            expect(_.isFunction(this.view.render)).toBeTruthy();
        });

        it('rendered a div.main-container', function() {
            expect(this.view.render().$el).toBe('div.main-container');
        });

        it('should prevent clicks on link', function() {
            this.view.render();
            var spyEvent = spyOnEvent(this.view.$('a'), 'click');
            this.view.$('a').click();
            expect(spyEvent).toHaveBeenTriggered();
            expect(spyEvent).toHaveBeenPrevented();
            expect(spyEvent).toHaveBeenStopped();
        });
    });
});
