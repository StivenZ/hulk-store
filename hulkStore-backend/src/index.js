import express from 'express';
import dotenv from 'dotenv';
import config from './config.js';
import connectDb from './database/db.js';
import Item from './database/models/Item.js';

dotenv.config({path: '../.env'});
const app = express()
const {appl} = config;
const router = express.Router();

app.use(express.json());
connectDb();

// Item Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/item/:id', (req, res) => {
    res.send('Hello World!')
});

app.post('/item', async (req, res) => {

    try {
        const newItem = await Item.create(req.body)
        res.send(newItem);
    } catch(e) {
        throw new Error('Object could not be created');
    } 
});

app.put('/item', (req, res) => {
    
})

app.get('/item', async (req, res) => {

    try {
        const items = await Item.find()
        res.send(items);
    } catch(e) {
        throw new Error('Object could not be created');
    } 
});


app.listen(appl.port, () => {
  console.log(`Server up and running on http://localhost:${appl.port}`)
})