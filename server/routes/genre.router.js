const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {

    const id = req.params.id;

    const sqlText = `
        SELECT 
            *
        FROM "genres"
        JOIN "movies_genres"
            ON "genres"."id" = "movies_genres"."genre_id"
        WHERE "movies_genres"."movie_id" = $1;
    `

    const sqlOptions = [id];

    pool.query(sqlText, sqlOptions)
        .then(response => {
            res.send(response.rows);
        })
        .catch(err => {
            console.error('Error in get one movie router', err);
            res.sendStatus(500);
        })
});

module.exports = router;