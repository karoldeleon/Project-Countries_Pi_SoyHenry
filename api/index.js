//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT = 3001;
const getApiData = require('./src/controllers/getApiData');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => { //// aqui cambiar a alter luego de que la aplicacioneste lista para que no se reinicien los datos en la bd
  ////esta linea es la conexion con el server 
  server.listen(PORT, async () => {
    await getApiData();
    console.log('DataBase Created');
    console.log('Server listening at 3001', PORT); // eslint-disable-line no-console
  });
});
