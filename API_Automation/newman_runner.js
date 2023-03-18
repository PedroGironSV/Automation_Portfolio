const static = require('node-static');
const http = require('http');
const newman = require("newman");

const file_path = new (static.Server)("./");

console.log("starting local server");

function setUpLocalServer() {
    http.createServer(function (req, res) {
        console.log("local server running");
        file_path.serve(req, res);

    }).listen(8080);
}

function executeCollection(){

    let title, reportTitle, reportPath;
    title = "Portfolio Report"
    reportTitle = "API Execution Report"
    reportPath = "Execution Results/portfolio_report.html";

    setUpLocalServer();
    

    newman.run({
        collection: 'API_Tests/Library/API_COLLECTION.postman_collection.json',
        environment: 'API_Tests/Library/TEST_ENVIRONMENT.json',
        reporters: ['htmlextra'],
        reporter: {
            htmlextra: {
                export: reportPath,
                logs: false,
                showOnlyFails: false,
                browserTitle: title,
                title: reportTitle,
                omitHeaders: true,
                showMarkdownLinks: true,
                skipFolders: "Initialization Steps"
            }
        }
    }, function (error){
        if(error) { throw error; }
        console.log('\n\nExecution completed, find the results report within folder: Execution Results and open it on your default browser');
    }
    );
}

executeCollection();