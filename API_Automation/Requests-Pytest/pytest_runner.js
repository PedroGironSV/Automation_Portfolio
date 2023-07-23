const shell = require('shelljs');

function executeTest(){
    reportPath = "./execution_report.html";
    shell.exec('python -m pytest -v --html=execution_report.html JSON_Placeholder_testing.py');
    shell.exec('start '+ reportPath);
}

executeTest();