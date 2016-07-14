// at the top of the test spec:
/*
var fs = require('fs');
 */

// abstract writing screen shot to a file
/*
function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}
*/

// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

        expect(browser.getTitle()).toEqual('Super Calculator1');

        //browser.pause();

        //added by gbd
        expect(browser.getCurrentUrl()).toEqual('http://juliemr.github.io/protractor-demo/');
    });
});
