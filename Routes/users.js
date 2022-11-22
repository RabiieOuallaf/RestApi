import express, { application } from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let Users = [];

router.get("/" , (req,res) => {

    res.send(Users);

});

router.post("/", (req,res) => {

    const user = req.body;
    
    // Give the user a uniq id 

    const uniqId = uuidv4();

    const adduniqId = { ...user , id : uniqId}

    Users.push(adduniqId);

    res.send(`POST IS REACHED , User first name is ${Users[0].Firstname}`);

});

router.patch("/:id" , (req,res) => {

    const {id} = req.params;

    const {Firstname, Lastname, Age} = req.body;

    const user = Users.find((user) => user.id === id);

    if(Firstname){
        user.Firstname = Firstname;
    }

    if(Lastname){
        user.Lastname = Firstname;
    }

    if(Age){
        user.Age = Age;
    }
    
    res.send(`The user with Id :${id} has been updated !`);
});

router.get("/:id", (req,res) => {

    const {id} = req.params;

    const userWithId = Users.find( (user) => user.id === id);

    res.send(userWithId);



});

router.delete("/:id", (req, res) => {

    const {id} = req.params;

    Users = Users.filter( (user) => user.id !== id );


    res.send(`User with id ${id} has been deleted !`);
});

export default router;