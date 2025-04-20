const osModule = require('./osModule');
const networkModule = require('./networkModule');

const osInfo = osModule.getOsInfo();
const networkInfo = networkModule.getNetworkInfo();

console.log('Información del Sistema Operativo');
for (const [key, value] of Object.entries(osInfo)) {
    console.log(`${key}: ${value}`);
}

console.log('\nInterfaces de Red');
for (const [interfaceName, details] of Object.entries(networkInfo)) {
    console.log(`Interfaz ${interfaceName}:`);
    details.forEach(({ familia, direccion, interno }) => {
        console.log(`  Familia: ${familia}  Dirección: ${direccion}  Interno: ${interno}`);
    });
}