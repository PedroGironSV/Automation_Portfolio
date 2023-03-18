/* ******************************************************* CHECK FRAMEWORK READY ******************************************************* */

var checkCore = function () {
	console.log('Framework successfully Loaded...');
};

/* ******************************************************* SET UP INPUT DATA ******************************************************* */
function clearGlobalExceptFrameworkTestData() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(function () {
                const clean = _.keys(pm.globals.toObject())
                _.each(clean, (arrItem) => {
                    let result = (arrItem.toLowerCase() === "module:framework" || arrItem.toLowerCase() === "isFrameworkInitialized".toLowerCase()
                        || arrItem.toLowerCase() === "module:testData".toLowerCase());
                    if (result == false) {
                        postman.clearGlobalVariable(arrItem);
                    }
                })
                resolve(_.keys(pm.globals.toObject()).length <= 5);
            }, 5000);
        } catch (error) {
            console.log('clearGlobalExceptFrameworkTestData() - Error Caught: ' + error.message);
        }
    });
};

function testDataInitializationTests() {
    return new Promise((resolve, reject) => {
        try {

            setTimeout(function () {
                if (isUndefined(postman.getGlobalVariable("module:testData"))) {
                    postman.setGlobalVariable('module:testData', responseBody);
                }
                resolve(postman.getGlobalVariable("module:testData"));
            }, 2000);
        } catch (error) {
            console.log(error, "Error initialization testData.");
        }
    });
};

function isUndefined(obj) {
    return typeof obj === 'undefined' || obj === null;
};

async function retrieveTestScriptData() {
    try {
        await testDataInitializationTests();
        const json = JSON.parse(postman.getGlobalVariable("module:testData"));
        const testData = json[0];
        postman.setGlobalVariable("testScriptData", JSON.stringify(testData));
    } catch (error) {
        console.log(error, "Unable to find testData for the TestScript.");
    }
};

function retrieveTestScriptParameters() {
    return new Promise((resolve, reject) => {
        try {

            setTimeout(function () {
                let isFound = false;
                let testParameters;
                const jsonData = JSON.parse(postman.getGlobalVariable("testScriptData"));
                testParameters = jsonData.mainHTTPMethods;
                Object.keys(testParameters).forEach(key => {
                    const values = testParameters[key];
                    Object.keys(values).forEach(k => {
                        postman.setGlobalVariable(k, values[k]);
                        isFound = true;
                    });
                });
            }, 2000);
        } catch (error) {
            console.log(error, " Unable to find parameters for the TestScript.");
        }
    });
};

/* ******************************************************* SET UP VALIDATIONS ******************************************************* */

async function retrieveValidationsScript() {
    try {
        if (isUndefined(postman.getGlobalVariable("module:testValidation"))) {
            postman.setGlobalVariable('module:testValidation', responseBody);
        }
    } catch (error) {
        console.log(error, "Unable set up the test validations.");
    }
};