class LoginElements {
    _signInDiv = 'div';
    _signInText = 'Sign in';
    _signInTag = 'a';
    _loginFormId = '#login-form';
    _userEmailId = '#UserLogin_username';
    _userPasswordId = '#UserLogin_password';
    _signInButton = 'button';
    _errorMessageId = '#UserLogin_username_em_';
    _profile = 'Profile';
    _profileClass = '.user-info__profile-name';
    _casinoId = 'Casino ID:';

    get signInDiv(){
        return this._signInDiv;
    }

    get signInText(){
        return this._signInText;
    }

    get signInTag(){
        return this._signInTag;
    }

    get loginFormId (){
        return this._loginFormId;
    }

    get userEmailId(){
        return this._userEmailId;
    }

    get userPasswordId(){
        return this._userPasswordId;
    }

    get signInButton(){
        return this._signInButton;
    }

    get errorMessageId(){
        return this._errorMessageId;
    }

    get profile(){
        return this._profile;
    }

    get profileClass(){
        return this._profileClass;
    }

    get casinoId(){
        return this._casinoId;
    }
}

module.exports = new LoginElements();