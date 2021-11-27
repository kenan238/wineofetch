const term = require("terminal-kit").terminal;

term.clear();
const printInfo = (title, content, maxchars) => {
    var repeatNum = term.width - maxchars;
    term.magenta(`${" ".repeat(repeatNum)}${title}`)(`: ${content}\n`);
}
const printTitle = (title, maxchars) => {
    var repeatNum = term.width - maxchars;
    var spaces = " ".repeat(repeatNum);
    term.magenta(`${spaces}${title}`)(`\n`);
    term(`${spaces}${"=".repeat(title.length)}\n`)
}
const printInfoAllAtOnce = (data) => {
    const maxchars = Math.max(...Object.keys(data).map(key => {
        var value = data[key];
        return value === true ? key.length : `${key}: ${value}`.length;
    }));
    Object.keys(data).forEach(key => {
        var value = data[key];
        return value === true ? printTitle(key, maxchars) : printInfo(key, value, maxchars);
    });
};

module.exports = {
    printInfo,
    printInfoAllAtOnce,
    term
};