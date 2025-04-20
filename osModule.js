const os = require('os');

function getOsInfo() {
    const totalMemMB = os.totalmem() / (1024 * 1024);
    const freeMemMB = os.freemem() / (1024 * 1024);

    return {
        nombre: os.platform(),
        tipo: os.type(),
    version: os.version(),
    arquitectura: os.arch(),
    cpus: os.cpus().length,
    memoriaTotal: totalMemMB.toFixed(2) + " MB",
    memoriaLibre: freeMemMB.toFixed(2) + " MB"
    };
}

module.exports = { getOsInfo};
