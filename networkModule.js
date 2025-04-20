const os = require('os');

function getNetworkInfo() {
    const interfaces = os.networkInterfaces();
    const result = {};

    for (const [interfaceName, addresses] of Object.entries(interfaces)) {
        result [interfaceName] = addresses.map((addr) => ({
            familia: addr.family,
            direccion: addr.address,
            interno: addr.internal
          }));
        }
      
        return result;
      }
      
      module.exports = { getNetworkInfo };
    
