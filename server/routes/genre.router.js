const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {

    const sqlText = `
        SELECT "id", "id" AS "genre_id", "name" FROM "genres"
        ORDER BY "id" ASC;
    `

    pool.query(sqlText)
        .then(response => {
            res.send(response.rows);
        })
        .catch(err => {
            console.error('Error in get one movie router', err);
            res.sendStatus(500);
        })

})

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

router.post('/', (req, res) => {
    const name = req.body.name;

    const sqlText = `
        INSERT INTO "genres" ("name")
        VALUES ($1)
    `

    const sqlOptions = [name];

    pool.query(sqlText, sqlOptions)
        .then(response => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.error('Error in genre router', err);
            res.sendStatus(500);
        })
})

module.exports = router;