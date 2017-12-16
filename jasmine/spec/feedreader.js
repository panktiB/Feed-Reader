/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('Url is defined and is not empty.', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url.length).not.toBe(0);
                expect(allFeeds[i].url).toBeDefined();
            }
        });

        it('names are defined and are not empty.', function() {
            for(var j = 0; j < allFeeds.length; j++) {
                expect(allFeeds[j].name.length).not.toBe(0);
                expect(allFeeds[j].name).toBeDefined();
            }
        });
    });


    describe('The menu', function() {

        it('element is hidden.', function() {
            expect(document.body.classList).toContain('menu-hidden');
        });

        it('changes visibility.', function() {
            $('.menu-icon-link').click();
            expect(document.body.classList).not.toContain('menu-hidden');
            $('.menu-icon-link').click();
            expect(document.body.classList).toContain('menu-hidden');
        }); 

    });

      
    describe('Inital Entries', function() {
        
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has at least a single .entry element within .feed container.', function() {
            expect($('.feed .entry').length).not.toBe(0);
        });

    });


    describe('New Feed Selection', function() {
        
        var content1, content2;
        beforeEach(function(done) {
            loadFeed(0, function() {
                content1 = $('.feed').html();
                loadFeed(1, function() {
                    content2 = $('.feed').html();
                    done();
                });
            });
        });

        it('has content that actually changes.', function() {
            expect(content1).not.toBe(content2);
        });
    });

}());
