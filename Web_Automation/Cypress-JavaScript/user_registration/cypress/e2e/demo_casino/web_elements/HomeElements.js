class HomeElements{
    _welcomeCardClass = '.mfp-content';
    _closeCardButton = 'button';
    _closeCardText = 'Got it';

    get welcomeCardClass(){
        return this._welcomeCardClass;
    }

    get closeCardButton(){
        return this._closeCardButton;
    }

    get closeCardText(){
        return this._closeCardText;
    }
}

module.exports = new HomeElements();