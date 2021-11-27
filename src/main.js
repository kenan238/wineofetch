const { getInformation } = require("./assets/fetch.js");
const { printInfoAllAtOnce } = require("./assets/display.js")

var info = getInformation();

// Display the system information in neofetch style
printInfoAllAtOnce({
    [info.hostname]: true,
    "OS": `Windows Version ${info.winver}`,
    "Uptime": `${info.uptime} seconds`,
    "CPU": `${info.cpu}`,
    "GPU": `${info.gpu}`,
    "Memory": `${info.memory} GB`,
    "Disk": `${info.disk} GB`,
    "Network": `${info.network}`
});