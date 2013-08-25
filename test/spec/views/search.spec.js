define([
    'underscore',
    'backbone',
    'views/search'
], function (_, Backbone, SearchView) {
    describe('Search view', function() {
        var spyNavigate = sinon.spy(Backbone.history, 'navigate');

        beforeEach(function() {
            loadFixtures('layout.html');
            this.view = new SearchView();
        });

        afterEach(function() {
            spyNavigate.reset();
        });

        it('looks like a Backbone view', function() {
            expect(this.view.el).toBeDefined();
            expect(this.view.render).toBeDefined();
            expect(_.isFunction(this.view.render)).toBeTruthy();
        });

        it('renders a div contain form.navbar-form', function() {
            expect(this.view.render().$el).toBe('div');
            expect(this.view.render().$el).toContain('form.navbar-form');
        });

        it('should be prevented on submit', function() {
            var spyEvent = spyOnEvent(this.view.$el, 'submit');
            this.view.render().$('form').submit();
            expect(spyEvent).toHaveBeenTriggered();
            expect(spyEvent).toHaveBeenPrevented();
        });

        it('should be triggered "navigate" on submit', function() {
            this.view.render().$('form').submit();
            expect(spyNavigate.called).toBeTruthy();
        });

        it('should navigate to input value on submit', function() {
            this.view.render();
            this.view.$('.form-control').val('nodejs');
            this.view.$('form').submit();
            expect(spyNavigate.calledWith('/search/nodejs', {trigger: true})).toBeTruthy();
        });
    });
});