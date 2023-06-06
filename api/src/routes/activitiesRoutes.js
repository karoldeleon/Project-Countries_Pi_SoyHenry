const { Router } = require("express");
const activitiesRoutes = Router();
const { getActivities , postActivities } = require('../handlers/activitiesHandler');


activitiesRoutes.post("/", postActivities );

activitiesRoutes.get("/", getActivities );

 module.exports = activitiesRoutes;