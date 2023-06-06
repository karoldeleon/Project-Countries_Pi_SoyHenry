const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require("./countriesRoutes")
const activitiesRouter = require("./activitiesRoutes")



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countriesRouter); /////Esta linea indica la ruta url cuando la ingresen que debe hacer 
/// y donde  en este caso a countriesrouter , donde estas las routas definidas 
router.use("/activities", activitiesRouter);

module.exports = router;
