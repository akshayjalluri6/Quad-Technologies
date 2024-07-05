require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create the table if it doesn't exist
const createTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS tickers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        last FLOAT,
        buy FLOAT,
        sell FLOAT,
        volume FLOAT,
        base_unit VARCHAR(10)
      )
    `);
  } catch (err) {
    console.error(err);
  }
};

createTable();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const data = response.data;

    // Convert the object to an array and sort by volume
    const sortedData = Object.values(data).sort((a, b) => b.volume - a.volume).slice(0, 10);

    // Clear the table before inserting new data
    await pool.query('DELETE FROM tickers');

    // Insert the top 10 results into the database
    const insertQuery = `
      INSERT INTO tickers (name, last, buy, sell, volume, base_unit)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;

    const insertPromises = sortedData.map(ticker => {
      const { name, last, buy, sell, volume, base_unit } = ticker;
      return pool.query(insertQuery, [name, last, buy, sell, volume, base_unit]);
    });

    await Promise.all(insertPromises);

    res.send(sortedData);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
  }
});

app.get("/api/tickers", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tickers');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log("Server Running on http://localhost:" + PORT + "/");
});
