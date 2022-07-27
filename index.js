import  express  from "express"; 
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

// initializing our express app 
const app = express();
// const PORT = process.env.PORT || 5000;
const PORT =  5000;

// using json data in our whole aplication , sending & req data thru API
app.use(bodyParser.json())

app.use('/users', usersRoutes)  

// creating our fist rout 
app.get('/', (req, res)=>{ 
    res.send('hello from Home Page!!!') 
});

// make our application listen for incoming request 
// 1.port to listen on 
// 2. function to be executed once we run the server 
app.listen(PORT, ()=>{
    console.log(`Server listening on port http://localhost:${PORT} !!`  );
})