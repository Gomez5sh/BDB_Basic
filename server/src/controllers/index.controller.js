const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  password: "mysecretpassword",
  database: "api",
  port: "5433",
  max: "40",
});

const gePerson = async (req, res) => {
  const response = await pool.query("SELECT * FROM person ORDER BY id ASC");
  res.status(200).json(response.rows);
};

const getPersonById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query("SELECT * FROM person WHERE id = $1", [id]);
  res.json(response.rows);
};

const createPerson = async (req, res) => {
  const { name, email } = req.body;
  const response = await pool.query(
    "INSERT INTO person (fullname, birth) VALUES ($1, $2)",
    [fullname, birth]
  );
  res.json({
    message: "person Added successfully",
    body: {
      user: { fullname, birth },
    },
  });
};

const updatePerson = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const response = await pool.query(
    "UPDATE person SET name = $1, email = $2 WHERE id = $3",
    [fullname, birth, id]
  );
  res.json("person Updated Successfully");
};

const deletePerson = async (req, res) => {
  const id = parseInt(req.params.id);
  await pool.query("DELETE FROM person where id = $1", [id]);
  res.json(`User ${id} deleted Successfully`);
};

module.exports = {
  getPerson,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
};
