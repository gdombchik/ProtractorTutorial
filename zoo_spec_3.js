describe ("Adopt an animal on the zoo test site", function(){
    it ("should able to adopt an animal", function() {

        browser.get('http://thetestroom.com/jswebapp/');

        element(by.model("person.name")).sendKeys("I will subscribe to this channel");
        element(by.binding("person.name")).getText().then(function(text){
            console.log(text);
        });
        element(by.buttonText("CONTINUE")).click();
        element(by.model("animal")).$('[value="1"]').click();
        element(by.partialButtonText("CONT")).click();
    });
});
