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
        validateValue("Validate there are 100 users in response", json.length, 100, true);
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
        validateValue("Validate userId is a number", typeof specificUser.userId, "number", true);
        validateValue("Validate element id is a number", typeof specificUser.id, "number", true);
        validateValue("Validate title is a string", typeof specificUser.title, "string", true);
        validateValue("Validate body is a string", typeof specificUser.body, "string", true);
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
        validateValue("Validate userId :: "+ postman.getGlobalVariable("newUserId"), newUser.userId, postman.getGlobalVariable("newUserId"), true);
        validateValue("Validate element id :: "+ postman.getGlobalVariable("newElementId"), newUser.id, postman.getGlobalVariable("newElementId"), true);
        validateValue("Validate title :: "+ postman.getGlobalVariable("newUserTitle"), newUser.title, postman.getGlobalVariable("newUserTitle"), true);
        validateValue("Validate body :: "+ postman.getGlobalVariable("newUserBody"), newUser.body, postman.getGlobalVariable("newUserBody"), true);
    }catch (error) {
		console.log('validateCreateNewUserTest() - Error Caught: ' + error.message);
	}
}

/* Validate PUT: Update partial user data */
function validateUserUpdateTest(){
    try{
        checkResponseCode(RESPONSE_CODE_200);
        checkResponseTime();

        let updatedUser = JSON.parse(responseBody);
        validateValue("Validate userId :: "+ postman.getGlobalVariable("updateUserId"), updatedUser.userId, postman.getGlobalVariable("updateUserId"), true);
        validateValue("Validate element id is valid ", !isUndefined(updatedUser.id), true, true);
        validateValue("Validate title :: "+ postman.getGlobalVariable("updateUserTitle"), updatedUser.title, postman.getGlobalVariable("updateUserTitle"), true);
        validateValue("Validate body :: "+ postman.getGlobalVariable("updateUserBody"), updatedUser.body, postman.getGlobalVariable("updateUserBody"), true);
    }catch (error) {
		console.log('validateUserUpdateTest() - Error Caught: ' + error.message);
	}
}

/* Validate PATCH: Update All user data */
function validatePartialUserUpdateTest(){
    try{
        checkResponseCode(RESPONSE_CODE_200);
        checkResponseTime();

        let partialUpdatedUser = JSON.parse(responseBody);
        validateValue("Validate title :: "+ postman.getGlobalVariable("partialUpdateUserTitle"), partialUpdatedUser.title, postman.getGlobalVariable("partialUpdateUserTitle"), true);
        validateValue("Validate body :: "+ postman.getGlobalVariable("partialUpdateUserBody"), partialUpdatedUser.body, postman.getGlobalVariable("partialUpdateUserBody"), true);
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