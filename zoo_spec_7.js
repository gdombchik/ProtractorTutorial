describe ("To test the animal adoption flow", function() {

    beforeEach(function(){
        browser.get('http://thetestroom.com/jswebapp/');
    });

    var home_page = require('./page_objects/home_page.js');
    var confirm_page = require('./page_objects/confirm_page.js');

    //xit - an x before an it will ignore test

    it('shouild be able to adopt an animal by page objects',function(){
        home_page.enterFieldValue('You will subscribe');
        var getHomePageText = home_page.getDynamicText();
        expect(getHomePageText).toBe('You will subscribe');
        var animal_page = home_page.clickContinue();

        animal_page.selectAnimal(2);
        //animal_page.getAnimal();
        var confirm_page = animal_page.clickContinue()
        expect(confirm_page.confirmText()).toBe('Thank you');
    });
});