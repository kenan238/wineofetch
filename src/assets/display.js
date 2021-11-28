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
// const normalize = (val, max, min) => (val - min) / (max - min);
const printLogo = async (data) => {
    term.moveTo(0, 0);
    for (var i = 0; i < data.length; i++) {
        var char = data[i];
        // term.moveTo(
        //     normalize(x, 0, term.width),
        //     normalize(y, 0, term.height)
        // );
        if (char === "\n") {
            term.nextLine(1);
        } else {
            term.green(char);
            term.right();
            term.move(-1, 0);
        }
    }
}

module.exports = {
    printInfo,
    printInfoAllAtOnce,
    printLogo
};