const os = require("os");
// Fetch system information

class Information {
    constructor() {
        this.winver = null;
        this.uptime = null;
        this.cpu = null;
        this.gpu = null;
        this.memory = null;
        this.disk = null;
        this.network = null;
        this.hostname = null;
    }
}

function getWindowsVersion() {
    const release = os.release();
    // const version = release.substring(0, release.indexOf('.'));
    return release;
}

function getUptime() {
    const uptime = os.uptime();
    return uptime;
}

function getCpu() {
    const cpus = os.cpus();

    const cpu = cpus[0].model;
    return cpu;
}

function getGpu() {
    var child_process = require('child_process');
    var res = child_process.execSync('wmic path win32_VideoController get name').toString().trim();
    return res
        .replace(/Name/g, '')
        .trimStart();
}

function getMemory() {
    const mem = os.totalmem() / (1024 * 1024 * 1024);
    return mem;
}

function getDisk() {
    return "C:\\";
}

function getNetwork() {
    const interfaces = os.networkInterfaces();
    const network = interfaces[Object.keys(interfaces)[0]][0].address;
    return network;
}

function getInformation() {
    const info = new Information();

    info.winver = getWindowsVersion();
    info.uptime = getUptime();
    info.cpu = getCpu();
    info.gpu = getGpu();
    info.memory = getMemory();
    info.disk = getDisk();
    info.network = getNetwork();
    info.hostname = os.hostname();

    return info;
}

module.exports = {
    getInformation
};
