require('./confirm_page.js');

var animal_page = function(){

    this.selectAnimal = function(index) {
        element(by.model('animal')).$('[value="' + index + '"]').click();
    };

    this.getAnimal = function(){
        /*var animalOption =
        console.log(element(by.model('animal')).$('[value="' + index + '"]').click();

        element.all(by.css('select[id="elementid"] option'))*/

        //console.log(element(by.model('animal')).$('[value="' + 2 + '"]').getText());
    };

    this.clickContinue = function(){
        element(by.buttonText('CONTINUE')).click();
        return require('./confirm_page.js');
    };

};
module.exports = new animal_page();

