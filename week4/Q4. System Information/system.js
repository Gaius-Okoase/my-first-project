import os from 'os';

let systemInformation = {
    'Operating System': os.type(),
    'Architecture': os.arch(),
    'Platform': os.platform(),
    'Hostname': os.hostname(),
    'Total Memory': (os.totalmem() / 1024 ** 3).toFixed(2) + ' GB',
    'Free Memory': (os.freemem() / 1024 ** 3).toFixed(2) + ' GB',
    'Uptime': os.uptime() + ' seconds',
    'CPU Model': os.cpus()[0].model,
    'Release': os.release(),
    'Version': os.version()
};
console.log(systemInformation);

//FINALLY DONE!! 😫😪