const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "mypassword",
  host: "127.0.0.1",
  database: "api",
  port: "5433",
});

const getPerson = (req, results) => {
  pool.query("select * from person", (err, res) => {
    if (err) {
      console.log(err);
    }
    results.status(200).json(results.rows);
  });
};

const createPerson = async (req, results) => {
  const { fullname, birth } = req.body;
  const res = await pool.query(
    "INSERT INTO person (fullname, birth) VALUES ($1, $2)",
    [fullname, birth]
  );
  console.log(res);
  results.json({
    message: "Person inserted",
    body: {
      user: { fullname, birth },
    },
  });
};

const getPersonId = async (req, results) => {
  const res = await pool.query("SELECT * FROM person WHERE id = $1", [
    req.params.id,
  ]);
  results.json(res.rows);
};

const upPerson = async (req, results) => {
  const id = req.params.id;
  const { fullname, birth } = req.body;
  const res = await pool.query(
    "UPDATE person SET fullname = $1, birth = $2 WHERE id = $3",
    [fullname, birth, id]
  );
  console.log(res);
  results.json("Person updated");
};

const deletePerson = async (req, results) => {
  const res = await pool.query("DELETE FROM person WHERE id = $1", [
    req.params.id,
  ]);
  console.log(res);
  results.json(`Person ${req.params.id} Deleted`);
};

module.exports = {
  getPerson,
  getPersonId,
  createPerson,
  upPerson,
  deletePerson,
};
