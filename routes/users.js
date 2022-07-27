import  express  from 'express';

// initializing our nrouter 
const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 24
    }
]

// all routes in here are starting with /users 
router.get('/', (req, res)=>{
    res.send(users); 
} );

// sending data from server to front-end 
router.post('/', (req, res)=>{

    // FETCHING ALL USERS FROM SERVER 
    const user = (req.body);

    // ADDING TO ARRAY 
    users.push(user);

    res.send(`User with the name ${user.firstName} added to the database!`);
});

export default router;