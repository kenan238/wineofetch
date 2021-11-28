const { getInformation } = require("./assets/fetch.js");
const { 
    printInfoAllAtOnce, 
    printLogo, 
    term, 
    printColors 
} = require("./assets/display.js")

const cmd_args = process.argv.slice(2);

var info = getInformation();
var logos = {
    "windowsnew": `################  ################
################  ################
################  ################
################  ################
################  ################
################  ################
################  ################
################  ################
################  ################
################  ################
################  ################
################  ################
################  ################
################  ################`,
    "windows8_81_10": `                   .oodMMMMMMMMMMMMM
       ..oodMMM  MMMMMMMMMMMMMMMMMMM
 oodMMMMMMMMMMM  MMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMM  MMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMM  MMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMM  MMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMM  MMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMM  MMMMMMMMMMMMMMMMMMM
 
 MMMMMMMMMMMMMM  MMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMM  MMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMM  MMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMM  MMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMM  MMMMMMMMMMMMMMMMMMM
 \`^^^^^^MMMMMMM  MMMMMMMMMMMMMMMMMMM
       \`\`\`\`^^^^  ^^MMMMMMMMMMMMMMMMM
                      \`\`\`\`^^^^^^MMMM`,
    "windowsold": `
       :tt:::tt333EE3  .et=:!!t3Z3z.,
       Et:::ztt33EEEL$ @Ee.,..t2355..,
      ;tt:::tt333EE7$ ;EEEEEEttttt33#
     :Et:::zt333EEQ.$ $EEEEEttttt33QL
     it::::tt333EEF$ @EEEEEEttttt33F
    ;3=*^\`\`\`"*4EEV$ :EEEEEEttttt33@.
    ,.=::::!t=., $\`$ @EEEEEEtttz33QF
   ;::::::::zt33)$   "4EEEtttji3P*
  :t::::::::tt33.$:Z3z..$  \`\`$ ,..g.
  i::::::::zt33F$ AEEEtttt::::ztF
 ;:::::::::t33V$ ;EEEttttt::::t3
 E::::::::zt33L$ @EEEtttt::::z3F
{3=*^\`\`\`"*4E3)$ ;EEEtttt:::::tZf
             \`$ :EEEEtttt::::z7
                 "VEzjt:;;z>*`
}

const displaySystemInfo = () => {
    // Display the system information
    term.moveTo(0, 4); // center info

    printInfoAllAtOnce({
        [info.hostname]: true,
        "OS": `Windows Version ${info.winver}`,
        "Uptime": `${info.uptime} seconds`,
        "CPU": `${info.cpu}`,
        "GPU": `${info.gpu}`,
        "Memory": `${info.memory} GB`,
        "Disk (C:)": `${info.disk}`,
        "Network": `${info.network}`
    });
};

const displayLogo = () => {
    // Display logo

    // Windows 8, 8.1 or 10
    if(
        info.winver.startsWith("6.2") || // Windows 8 
        info.winver.startsWith("6.3") || // Windows 8.1
        info.winver.startsWith("10.0")   // Windows 10
    ) {
        printLogo(logos["windows8_81_10"]);
    }

    // Unknown (probably old)
    else printLogo(logos["windowsold"]);
}

if (cmd_args.length === 0) {
    displaySystemInfo();
    displayLogo();
}
else {
    var recognized_command = false;

    for(let i=0; i<cmd_args.length; i++) {
        var arg = cmd_args[i];
        if(arg == "/systeminfo") {
            displaySystemInfo();
            recognized_command = true;
        }
        if(arg == "/logo") {
            displayLogo();
            recognized_command = true;
        }
    }
    if(!recognized_command) {
        term.green("WINEOFETCH")(" - ").red("by kenan238\n")
        term.yellow("  Available command line arguments:\n")
        term.gray("      <nothing> : Display everything\n")
        term.gray("      /systeminfo : Display system info\n")
        term.gray("      /logo : Display logo\n")
    }
}

term.nextLine(4); // Leave some space before exiting.