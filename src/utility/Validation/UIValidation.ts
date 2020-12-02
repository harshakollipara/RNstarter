import UtilityManager from "../UtilityManager";

export default class UIValidation {
    public constructor() {
    }

    //only characters a-z and A-Z
    private REGEX_CHARACTERS = /^[a-zA-Z ]+$/;

    // Alpha Numeric Charcters a-z, A-Z, 0-9
    private REGEX_ALPHA_NUMERIC = /^[a-zA-Z0-9]+$/;

    //email validation
    private REGEX_EMAIL = /^[A-Z0-9_]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;

    // 8 digit AplhaNumeric
    private REGEX_PASSWORD = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    /** Credit card Validation details
     * (4[0-9]{12}(?:[0-9]{3})?) |          // Visa
     * (5[1-5][0-9]{14}) |                  // MasterCard
     * (6(?:011|5[0-9]{2})[0-9]{12}) |      // Discover
     * (3[47][0-9]{13}) |                   // AMEX
     * (3(?:0[0-5]|[68][0-9])[0-9]{11}) |   // Diners Club
     * ((?:2131|1800|35[0-9]{3})[0-9]{11})  // JCB
     */
    private REGEX_CREDIT_CRAD = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

    /* To handle name validation - only Alphabets*/
    public validateName(nameValue : any) {
        nameValue = nameValue.trim();
        if (UtilityManager.objectValidationInstance.isStringEmpty(nameValue)) {
            return false;
        } else if (!this.REGEX_CHARACTERS.test(nameValue)) {
            return false;
        } else {
            return true;
        }
    }

    /* To handle user name validation - only Alpha Numeric value*/
    public validateUserName(usernameValue : any) {
        usernameValue = usernameValue.trim();
        if (UtilityManager.objectValidationInstance.isStringEmpty(usernameValue)) {
            return false;
        } else if (!this.REGEX_ALPHA_NUMERIC.test(usernameValue)) {
            return false;
        } else {
            return true;
        }
    }

    /* To handle email validation */
    public validateEmail(emailAddress : any) {
        emailAddress = emailAddress.trim();
        if (UtilityManager.objectValidationInstance.isStringEmpty(emailAddress)) {
            return false;
        } else if (!this.REGEX_EMAIL.test(emailAddress)) {
            return false;
        } else {
            return true;
        }
    }

    /* To validate password */
    public validatePassword(passwordValue : any) {
        passwordValue = passwordValue.trim();
        if (UtilityManager.objectValidationInstance.isStringEmpty(passwordValue)) {
            return false;
        } else if (passwordValue.length < 6) {
            return false;
        } else if (!this.REGEX_PASSWORD.test(passwordValue)) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * To validate Date of Birth
     * dateString format- DD/MM/YYYY
     * Year starts from 1900
     */
    public validateDateOfBirth(dateString : any) {
        var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
        if (regex.test(dateString)) {
            var parts = dateString.split('/');
            var dtDOB = new Date(parts[1] + '/' + parts[0] + '/' + parts[2]);
            var dtCurrent = new Date();
            if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
                return false;
            }
            if (dtCurrent.getFullYear() - dtDOB.getFullYear() === 18) {
                if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                    return false;
                }
                if (dtCurrent.getMonth() === dtDOB.getMonth()) {
                    if (dtCurrent.getDate() < dtDOB.getDate()) {
                        return false;
                    }
                }
            }
            return true;
        } else {
            return false;
        }
    }

    //Validate CC Number
    public validateCreditCardNumber(creditCardNumber : any) {
        // Strip spaces and dashes
        creditCardNumber = creditCardNumber.replace(/[ -]/g, '');
        if (UtilityManager.objectValidationInstance.isStringEmpty(creditCardNumber)) {
            return false;
        } else if (this.REGEX_CREDIT_CRAD.test(creditCardNumber)) {
            return true;
        } else {
            return false;
        }
    }

    /* To handle pincode validation*/
    public validatePincode(pincode : any) {
        var pincodeRegex = /^[1-9][0-9]{5}$/;

        pincode = pincode.trim();

        if (UtilityManager.objectValidationInstance.isStringEmpty(pincode)) {
            return false;
        } else if (!pincodeRegex.test(pincode)) {
            return false;
        } else {
            return true;
        }
    }

    /*To Validate number*/
    public validatePhoneNumber(phoneNumber : any) {
        var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        phoneNumber = phoneNumber.trim();
        if (UtilityManager.objectValidationInstance.isStringEmpty(phoneNumber)) {
            return false;
        } else if (!phoneRegex.test(phoneNumber)) {
            return false;
        } else {
            return true;
        }
    }

}