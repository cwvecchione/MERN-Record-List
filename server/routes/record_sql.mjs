import express from "express";
//import db from "../db/conn.mjs";
import db from "../db/conn_sql.mjs";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
    db.query("SELECT * FROM employees", (err, res) => {
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
db.query(`SELECT * FROM employees WHERE id = ${id}`, (err, res) => {
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
    const newEmployee = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level
    };

    db.query("INSERT INTO employees SET ?", newEmployee, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, { id: res.insertId, ...newEmployee });
    });
});

// This section will help you update a record by id.
router.patch = (id, employee, result) => {
    db.query(
        "UPDATE employees SET name = ?, position = ?, level = ? WHERE id = ?",
        [employee.name, employee.position, employee.level, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log("updated employee: ", { id: id, ...employee });
            result(null, { id: id, ...employee });
        }
    );
};

// This section will help you delete a record
router.delete = (id) => {
    sql.query(
        "DELETE FROM employees WHERE id = ?",
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log("deleted employee: ", { id: id, ...employee });
            result(null, { id: id, ...employee });
        }
    );
};

export default router;
