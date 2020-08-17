const { Router } = require("express");
const router = Router();

const {
  getPerson,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/index.controller");

router.get("/person", getPerson);
router.get("/person/:id", getPersonById);
router.post("/person", createPerson);
router.put("/person/:id", updatePerson);
router.delete("/person/:id", deletePerson);

module.exports = router;
