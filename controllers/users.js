import { v4 as uuidv4 } from 'uuid';

let Users = [];

// Getting users informations;
export const getUsers =  (req,res) => {

    res.send(Users);

};

// "uplaod" users informations 
export const postUser =  (req,res) => {

    const user = req.body;
    
    // Give the user a uniq id 

    const uniqId = uuidv4();

    const adduniqId = { ...user , id : uniqId}

    Users.push(adduniqId);

    res.send(`POST IS REACHED , User first name is ${Users[0].Firstname}`);

}

// Update users informations 

export const patchUser = (req,res) => {

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
}

// update user with spcif id 

export const getUserByid = (req,res) => {

    const {id} = req.params;

    const userWithId = Users.find( (user) => user.id === id);

    res.send(userWithId);


}

// Delete user 

export const deleteUser = (req, res) => {

    const {id} = req.params;

    Users = Users.filter( (user) => user.id !== id );


    res.send(`User with id ${id} has been deleted !`);
}