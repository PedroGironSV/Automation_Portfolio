/* Constants for Response Code */
var RESPONSE_CODE_200 = 200;
var RESPONSE_CODE_201 = 201;

/* Dummy function to check if the test_validations script is ready */
var checkValidationsCore = function () {
    tests['Tests Validation Script ready'] = typeof checkValidationsCore === 'function';
	console.log('Validations successfully Loaded...');
};

/* Function to check if an Object/Property is undefined or null */
function isUndefined(obj) {
    return typeof obj === 'undefined' || obj === null;
};

/* check that the response code is valid/expected */
function checkResponseCode(expectedResponseCode) {
	console.log('validating response code for: ', pm.request.method + ' ' + request.name);
	if (isUndefined(expectedResponseCode)) {
		expectedResponseCode = RESPONSE_CODE_200;
	}
	let responseCode = pm.response.code;
	let result = responseCode === expectedResponseCode;
	if (result === true) {
		tests["Response Code is " + expectedResponseCode] = result === true;
	} else {
		tests["Response Code: Expected is " + expectedResponseCode + " - Current is " + responseCode] = result === true;
	}
};

/* check that the response time is on the allowed time in milliseconds */
function checkResponseTime() {
	try {
		const responseTime = pm.response.responseTime;
		const maxResponseTime = postman.getGlobalVariable("maxAPIResponseTime");

		let result = responseTime > maxResponseTime;
		if (result === true) {
			tests["Current response time: " + responseTime + "ms - Expected Max-Response time: " + maxResponseTime + "ms"] = result === false;
		} else {
			tests["Response Time - Validation Success."] = result === false;
		}
	} catch (error) {
		console.log('checkResponseTime() - Error Caught: ' + error.message);
	}
}

/* function to validate the properties of each response */
function validateValue(testName, currentValue, expectedValue, isEqual){

    let result, errorMessage;
    if (isUndefined(currentValue)) {
        console.log("validateValue() - Parameter currentValue cannot be undefined/null");
        throw new Error("validateValue() - Parameter currentValue cannot be undefined/null");
    }

    if (typeof currentValue == typeof expectedValue) {
        if (isEqual) {
            result = currentValue === expectedValue;
            if (!result) {
                errorMessage += " - Validation Failed. Current value: " + currentValue + " - Expected value: " + expectedValue;
                tests[testName + " " + errorMessage] = result === true;
            } else {
                tests[testName + " - Validation Success."] = result === true;
            }
        } else {
            result = currentValue !== expectedValue;
            if (!result) {
                errorMessage += " - Validation Failed. Current value: " + currentValue + " - Expected value: " + expectedValue;
                tests[testName + " " + errorMessage] = result === true;
            } else {
                tests[testName + " - Validation Success."] = result === true;
            }
        }
    } else {
        if (isEqual) {
            result = currentValue == expectedValue;
            if (!result) {
                errorMessage += " - Validation Failed. Current value: " + currentValue + " - Expected value: " + expectedValue;
                tests[testName + " " + errorMessage] = result === true;
            } else {
                tests[testName + " - Validation Success."] = result === true;
            }
        } else {
            result = currentValue != expectedValue;
            if (!result) {
                errorMessage += " - Validation Failed. Current value: " + currentValue + " - Expected value: " + expectedValue;
                tests[testName + " " + errorMessage] = result === true;
            } else {
                tests[testName + " - Validation Success."] = result === true;
            }
        }
    }
}

/* Validate GET: All users response */
function validateAllUsersTest(){
    try{
        checkResponseCode(RESPONSE_CODE_200);
        checkResponseTime();

        let json = JSON.parse(responseBody);
        validateValue("Validate user's array is not empty", json.length > 0, true, true);
        validateValue("Validate there are 10 users in response", json.length, 10, true);
    }catch (error) {
		console.log('validateAllUsersTest() - Error Caught: ' + error.message);
	}
}

/* Validate GET: Specific user response */
function validateSpecificUserTest(){
    try{
        checkResponseCode(RESPONSE_CODE_200);
        checkResponseTime();

        let specificUser = JSON.parse(responseBody);
        validateValue("Validate userId :: "+ postman.getGlobalVariable("searchSpecificUserId"), specificUser.id, postman.getGlobalVariable("searchSpecificUserId"), true);
        validateValue("Validate name", typeof specificUser.name, "string", true);
        validateValue("Validate username", typeof specificUser.username, "string", true);
        validateValue("Validate email", typeof specificUser.email, "string", true);
        validateValue("Validate address information is present", !isUndefined(specificUser.address), true, true);
        validateValue("Validate geo information is present", !isUndefined(specificUser.address.geo), true, true);
        validateValue("Validate phone", !isUndefined(specificUser.phone), true, true);
        validateValue("Validate website", !isUndefined(specificUser.website), true, true);
        validateValue("Validate company information is present", !isUndefined(specificUser.company), true, true);
    }catch (error) {
		console.log('validateSpecificUserTest() - Error Caught: ' + error.message);
	}
}

/* Validate POST: Creation of new user response */
function validateCreateNewUserTest(){
    try{
        checkResponseCode(RESPONSE_CODE_201);
        checkResponseTime();

        let newUser = JSON.parse(responseBody);
        validateValue("Validate userId :: "+ postman.getGlobalVariable("id"), newUser.id, postman.getGlobalVariable("id"), true);
        validateValue("Validate name :: "+ postman.getGlobalVariable("name"), newUser.name, postman.getGlobalVariable("name"), true);
        validateValue("Validate username :: "+ postman.getGlobalVariable("username"), newUser.username, postman.getGlobalVariable("username"), true);
        validateValue("Validate email :: "+ postman.getGlobalVariable("email"), newUser.email, postman.getGlobalVariable("email"), true);
        validateValue("Validate linkedInProfile :: "+ postman.getGlobalVariable("linkedInProfile"), newUser.linkedInProfile, postman.getGlobalVariable("linkedInProfile"), true);

    }catch (error) {
		console.log('validateCreateNewUserTest() - Error Caught: ' + error.message);
	}
}

/* Validate PUT: Update All user data */
function validateUserUpdateTest(){
    try{
        checkResponseCode(RESPONSE_CODE_200);
        checkResponseTime();

        let updatedUser = JSON.parse(responseBody);
        validateValue("Validate userId :: "+ postman.getGlobalVariable("updatedId"), updatedUser.id, postman.getGlobalVariable("updatedId"), true);
        validateValue("Validate name :: "+ postman.getGlobalVariable("updatedName"), updatedUser.name, postman.getGlobalVariable("updatedName"), true);
        validateValue("Validate username :: "+ postman.getGlobalVariable("updatedUsername"), updatedUser.username, postman.getGlobalVariable("updatedUsername"), true);
        validateValue("Validate email :: "+ postman.getGlobalVariable("updatedEmail"), updatedUser.email, postman.getGlobalVariable("updatedEmail"), true);
        validateValue("Validate street :: "+ postman.getGlobalVariable("updatedStreet"), updatedUser.address.street, postman.getGlobalVariable("updatedStreet"), true);
        validateValue("Validate suite :: "+ postman.getGlobalVariable("updatedSuite"), updatedUser.address.suite, postman.getGlobalVariable("updatedSuite"), true);
        validateValue("Validate city :: "+ postman.getGlobalVariable("updatedCity"), updatedUser.address.city, postman.getGlobalVariable("updatedCity"), true);
        validateValue("Validate zipcode :: "+ postman.getGlobalVariable("updatedZipcode"), updatedUser.address.zipcode, postman.getGlobalVariable("updatedZipcode"), true);
        validateValue("Validate latitud :: "+ postman.getGlobalVariable("updatedLat"), updatedUser.address.geo.lat, postman.getGlobalVariable("updatedLat"), true);
        validateValue("Validate longitud :: "+ postman.getGlobalVariable("updatedLng"), updatedUser.address.geo.lng, postman.getGlobalVariable("updatedLng"), true);
        validateValue("Validate phone :: "+ postman.getGlobalVariable("updatedPhone"), updatedUser.phone, postman.getGlobalVariable("updatedPhone"), true);
        validateValue("Validate website :: "+ postman.getGlobalVariable("updatedWebsite"), updatedUser.website, postman.getGlobalVariable("updatedWebsite"), true);
        validateValue("Validate company name :: "+ postman.getGlobalVariable("updatedCompanyName"), updatedUser.company.name, postman.getGlobalVariable("updatedCompanyName"), true);
        validateValue("Validate catchPhrase :: "+ postman.getGlobalVariable("updatedCatchPhrase"), updatedUser.company.catchPhrase, postman.getGlobalVariable("updatedCatchPhrase"), true);
        validateValue("Validate bs :: "+ postman.getGlobalVariable("updatedBs"), updatedUser.company.bs, postman.getGlobalVariable("updatedBs"), true);
    }catch (error) {
		console.log('validateUserUpdateTest() - Error Caught: ' + error.message);
	}
}

/* Validate PATCH: Update partial user data */
function validatePartialUserUpdateTest(){
    try{
        checkResponseCode(RESPONSE_CODE_200);
        checkResponseTime();

        let partialUpdatedUser = JSON.parse(responseBody);
        validateValue("Validate userId :: "+ postman.getGlobalVariable("partialUpdateUserId"), partialUpdatedUser.id, postman.getGlobalVariable("partialUpdateUserId"), true);
        validateValue("Validate name :: "+ postman.getGlobalVariable("partialUpdateName"), partialUpdatedUser.name, postman.getGlobalVariable("partialUpdateName"), true);
        validateValue("Validate username :: "+ postman.getGlobalVariable("partialUpdateUsername"), partialUpdatedUser.username, postman.getGlobalVariable("partialUpdateUsername"), true);
    }catch (error) {
		console.log('validatePartialUserUpdateTest() - Error Caught: ' + error.message);
	}
}

/* Validate DELETE: Delete an user */
function validateDeleteUserTest(){
    try{
        checkResponseCode(RESPONSE_CODE_200);
        checkResponseTime();

        let deletedUser = JSON.parse(responseBody);
        validateValue("Validate deleted user ", !isUndefined(deletedUser), true, true);
    }catch (error) {
		console.log('validateUserUpdateTest() - Error Caught: ' + error.message);
	}
}