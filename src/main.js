const { getInformation } = require("./assets/fetch.js");
const { 
    printInfoAllAtOnce, 
    printLogo, 
    term, 
    printColors 
} = require("./assets/display.js")

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

// Display the system information
term.moveTo(0, 4); // center info

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

term.nextLine(4); // Leave some space before exiting.