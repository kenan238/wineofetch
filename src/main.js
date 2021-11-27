const { getInformation } = require("./assets/fetch.js");
const { printInfoAllAtOnce, term } = require("./assets/display.js")

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
    "windows10": `                   .oodMMMMMMMMMMMMM
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
       Et:::ztt33EEEL$ @Ee.,      ..,
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

// Display the system information in neofetch style
term.green(logos["windowsold"])
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