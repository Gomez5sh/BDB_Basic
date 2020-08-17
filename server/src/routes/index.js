const { Router } = require("express");
const api = Router();

const {
  getPerson,
  getPersonId,
  createPerson,
  upPerson,
  deletePerson,
} = require("../controllers/index.controller");

api.get("/all", getPerson);
api.get("/all/:id", getPersonId);
api.post("/all", createPerson);
api.put("/all/:id", upPerson);
api.delete("/all/:id", deletePerson);

module.exports = api;
