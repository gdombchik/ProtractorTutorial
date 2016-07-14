describe('',function(){
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var button = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));
    var historyRowOneSecondResult = element.all(by.repeater('result in memory').row(0).column('result.second'));
    //var historyRowOneSecondResult = element.all(by.repeater('result in memory').row(0));

    beforeEach(function(){
       browser.get('http://juliemr.github.io/protractor-demo/');
    });

    function add(a,b){
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        button.click();
        latestResult.getText().then(function(text){
            console.log(text);
        });
    }

    it('should have a history',function(){
        add(1,1);
        add(1,1);

        expect(history.count()).toEqual(2);

        add(2,2);

        expect(history.count()).toEqual(3);

        /*history.getText().then(function(text){
            console.log(text);
        });*/

        historyRowOneSecondResult.getText().then(function(text){
            console.log(text);

            /*

            returns [ '2' ] instead of '2'

            as stated here:
             //http://stackoverflow.com/questions/33593009/protractor-gettext-returns-an-array-instead-of-a-string

             */
        });


        var results = element.all(by.repeater('result in memory').row(0));


        var lastDestination;
        element.all(by.repeater('result in memory').row(0)).then(
            function(elements){
                lastDestination = elements[0];
            });
        //expect(lastDestination.getText()).toEqual("1");

        /*var lastDestination;
        historyRowOneSecondResult.then(
            function(elements){
                //lastDestination = elements[0];
                console.log(elements[0]);
            });*/

        /*lastDestination.getText().then(function(text){
            console.log(text);
        });*/

    });

});
