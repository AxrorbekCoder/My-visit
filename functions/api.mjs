import express from 'express';
import path from 'path';
import serverless from 'serverless-http';


const app = express();
const port =  9000;
const __dirname = path.resolve;

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});

export const handler = serverless(app);