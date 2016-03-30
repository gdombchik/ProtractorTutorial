var confirm_page = function(){

    this.confirmText = function(){
        return element(by.css('h1')).getText();
    };

}

module.exports  = new confirm_page();
