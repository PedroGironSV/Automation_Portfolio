class RegistrationElements{
    _anchorTag = 'a';
    _signUpText = 'Sign up';
    _emailId = '#core__protected_modules_user_yiiForm_RegistrationForm_email';
    _passwordId = '#core__protected_modules_user_yiiForm_RegistrationForm_password';
    _confirmPasswordId = '#core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation';
    _spanTag = 'span';
    _usdText = 'USD';
    _currencyDropDownClass = '.selectric-items div.selectric-scroll';
    _labelTag = 'label';
    _termnsAndConditionsText = 'I unconditionally agree with';
    _buttonTag = 'button';
    _createAccountText = 'Create account';
    _pTag = 'p';
    _successRegistrationMessage = 'Registration successfully finished';
    _emailText = 'Email';
    _errorRegistrationId = '#core__protected_modules_user_yiiForm_RegistrationForm_email_em_';

    get anchorTag(){
        return this._anchorTag;
    }

    get signUpText(){
        return this._signUpText;
    }

    get emailId(){
        return this._emailId;
    }

    get passwordId(){
        return this._passwordId;
    }

    get confirmPasswordId(){
        return this._confirmPasswordId;
    }

    get spanTag(){
        return this._spanTag;
    }

    get usdText(){
        return this._usdText;
    }

    get currencyDropDownClass(){
        return this._currencyDropDownClass;
    }

    get labelTag(){
        return this._labelTag;
    }

    get termnsAndConditionsText(){
        return this._termnsAndConditionsText;
    }

    get buttonTag(){
        return this._buttonTag;
    }

    get createAccountText(){
        return this._createAccountText;
    }

    get pTag(){
        return this._pTag;
    }

    get successRegistrationMessage(){
        return this._successRegistrationMessage;
    }

    get emailText(){
        return this._emailText;
    }

    get errorRegistrationId(){
        return this._errorRegistrationId;
    }
}

module.exports = new RegistrationElements();