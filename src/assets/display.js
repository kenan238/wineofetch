const term = require("terminal-kit").terminal;

term.clear();
const printInfo = (title, content, maxchars) => {
    var repeatNum = term.width - maxchars; // calculate how much space we need to move
    term.magenta(`${" ".repeat(repeatNum)}${title}`).bold(`: ${content}\n`); // print
}
const printTitle = (title, maxchars) => {
    var repeatNum = term.width - maxchars; // calculate how much space we need to move
    var spaces = " ".repeat(repeatNum); // generate spaces
    term.magenta(`${spaces}${title}`)(`\n`); // print
    term.yellow(`${spaces}${"-".repeat(title.length)}\n`) // more printing
}
const printInfoAllAtOnce = (data) => {
    const maxchars = Math.max(...Object.keys(data).map(key => {
        var value = data[key];
        return value === true ? key.length : `${key}: ${value}`.length;
    })) + 1; // get the longest piece of information + 1
    Object.keys(data).forEach(key => {
        var value = data[key];
        return value === true ? printTitle(key, maxchars) : printInfo(key, value, maxchars);
    }); // print
    printColors(maxchars); // print colors
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
const printColors = (maxchars) => {
    term.nextLine();
    term.move(term.width - maxchars, 0);
    var content = '     ';
    term.bgRed(content);
    term.bgGreen(content);
    term.bgYellow(content);
    term.bgBlue(content);
    term.bgMagenta(content);
    term.bgCyan(content);
    term.inverse.bgRed(content);
    term.bgGrey(content);

    // Next line
    term.nextLine();
    term.move(term.width - maxchars, 0);
    term.bgBrightRed(content);
    term.bgBrightGreen(content);
    term.bgBrightYellow(content);
    term.bgBrightBlue(content);
    term.bgBrightMagenta(content);
    term.bgBrightCyan(content);
}

module.exports = {
    printInfo,
    printInfoAllAtOnce,
    printLogo,
    printColors,
    term
};
