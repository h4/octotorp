define([
    'underscore',
    'views/result'
], function (_,  ResultView) {
    describe('Result view', function() {
        beforeEach(function() {
            var options = {
                query: 'nodejs'
            };
            loadFixtures('layout.html');
            this.view = new ResultView(options);
        });

        it('looks like a Backbone view', function() {
            expect(this.view.el).toBeDefined();
            expect(this.view.render).toBeDefined();
            expect(_.isFunction(this.view.render)).toBeTruthy();
        });

        it('renders a div.results', function() {
            expect(this.view.render().$el).toBe('div.result');
        });

        it('should render div.progress when data not loaded', function() {
            expect(this.view.render().$el).toContain('.progress');
        });

        it('should render tweets when data loaded', function() {
            var modelFixture = {
                query: "nodejs"
            };
            var tweetsFixture = [
                    {id: 1},
                    {id: 2},
                    {id: 3},
                    {id: 4}
                ];
            this.view.model.set(modelFixture);
            this.view.model.get('tweets').set(tweetsFixture);
            expect(this.view.render(this.view.model).$el).toContainText(modelFixture.query);
            expect(this.view.render(this.view.model).$('.tweet').length).toEqual(tweetsFixture.length);
        });
    });

    return {};
});
