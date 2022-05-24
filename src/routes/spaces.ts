import { Router } from "express";
import database from "../utils/database";
const router = Router();

//GET /spaces
router.get('/', async (req, res) => {
    //we are doing fucking black magic right here ~Jakubiszon
    //it's just regular backend ~Pixel
    const { limit, page } = req.query;
    const offset = (page - 1) * limit;

    database.query('select * from spaces limit $1 offset $2', [limit, offset], (err, result) => {
        if (err) {
            res.status(500).end();
        }
        let arr = [];
        result.rows.forEach(r => {
            arr.push({
                id: r.id,
                name: r.name,
                description: r.description,
            })
        })
    });
});

//GET /spaces/1253676
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    database.query('select * from spaces where id = $1', [id], (err, result) => {
        if (err) {
            res.status(500).end();
        }
        if (result.rows.length == 0) {
            res.status(404).end();
        }
        res.json(result.rows[0]);
    });
});

export default router;