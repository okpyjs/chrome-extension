function executeFunction() {
    // Place your function code here
    console.log("Executing function...");
}

function getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function executeAtRandomInterval() {
    // Generate a random time interval between 1 and 5 seconds
    var interval = getRandomInterval(1000, 10000);

    // Wait for the random interval
    setTimeout(function () {
        // Call the function
        executeFunction();

        // Call the executeAtRandomInterval function again
        executeAtRandomInterval();
    }, interval);
}

var url = window.location.href
if(url.includes("upwork.com/nx/jobs/search")) {
    // Start the execution
    executeAtRandomInterval();
}
