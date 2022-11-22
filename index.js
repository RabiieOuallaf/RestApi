import express from "express";
import bodyParser from 'body-parser';
import router from './Routes/users.js';

const app = express();
const PORT = 3000;

// Middlewear

app.use(bodyParser.json());

app.use("/users", router);

app.get("/", (req,res) => {
    
    res.end("Hello world!");
});

// Start the server 

app.listen(PORT, () => {
    console.log(`Your application si running perfectly in http://localhost:${PORT}`);
})


