class Validations{
    _be_visible = 'be.visible';
    _be_enabled = 'be.enabled';
    _have_text = 'have.text';

    get BE_VISIBLE(){
        return this._be_visible;
    }

    get BE_ENABLED(){
        return this._be_enabled;
    }

    get HAVE_TEXT(){
        return this._have_text;
    }
}

module.exports = new Validations();