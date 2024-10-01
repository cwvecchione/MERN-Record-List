import express from "express";
import db from "../db/conn_sql.mjs";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
    sql.query("SELECT * FROM employees", (err, res) => {
    if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
    }
    result(null, res);
    });
});


// This section will help you get a single record by id
router.get('/:id', async (req, res) => {
sql.query(`SELECT * FROM employees WHERE id = ${id}`, (err, res) => {
    if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
    }
    result(null, res);
    });
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
    let newDocument = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
    sql.query("INSERT INTO employees SET ?", newTutorial, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, { id: res.insertId, ...newTutorial });
    });
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    const updates =  {
        $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level
        }
    };

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
});

// This section will help you update a record by id.
router.patch = (id, tutorial, result) => {
  sql.query(
    "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
    [tutorial.title, tutorial.description, tutorial.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated tutorial: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("records");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("records");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
});

export default router;