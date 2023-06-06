///importo router de express para poder usarlo
//creo la constante de mis routas y ejecuto router para usarlo
const { Router } = require("express");
const countriesRouter = Router();
const getCountriesHandler = require('../handlers/countriesHandler');



///creo mis rutas 
countriesRouter.get("/",getCountriesHandler);

countriesRouter.get("/:id",getCountriesHandler);

 module.exports = countriesRouter;