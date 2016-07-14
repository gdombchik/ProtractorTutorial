/*


 This uses the globals element and by, which are also created by Protractor. The element function is used for finding HTML elements on your webpage. It returns an ElementFinder object, which can be used to interact with the element or get information from it. In this test, we use sendKeys to type into <input>s, click to click a button, and getText to return the content of an element.

 element takes one parameter, a Locator, which describes how to find the element. The by object creates Locators. Here, we're using three types of Locators:

 by.model('first') to find the element with ng-model="first". If you inspect the Calculator page source, you will see this is <input type=text ng-model="first">.
 by.id('gobutton') to find the element with the given id. This finds <button id="gobutton">.
 by.binding('latest') to find the element bound to the variable latest. This finds the span containing {{latest}}

 */



describe('Protractor Demo App',function(){

    it('should add one and two',function(){
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys(1);
        element(by.model("second")).sendKeys(2);
        element(by.id("gobutton")).click();

        //returns a promise.  need to wait to print the text value
        element(by.binding('latest')).getText().then(function(text) {
            console.log(text);
            expect(text).toBe(3);  //same as ===; toEqual and toBe are the same in regards to value, but toBe will evaluate the object as well
        });
    });

});
