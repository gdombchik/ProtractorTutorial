/*

 Here, we've pulled the navigation out into a beforeEach function which is run before every it block.
 We've also stored the ElementFinders for the first and second input in nice variables that can be reused.
 Fill out the second test using those variables, and run the tests again to ensure they pass.

 */


describe('Protractor Demo App',function(){
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var operator  = element(by.model('operator'));

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title',function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two',function(){
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        goButton.click();

        expect(latestResult.getText()).toEqual('3');
    });

    it('should multiply four times six',function(){
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(4);
        operator.sendKeys('*');

        goButton.click();

        expect(latestResult.getText()).toEqual('16');
    });

});