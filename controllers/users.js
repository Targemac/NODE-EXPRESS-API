import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
  // FETCHING ALL USERS FROM SERVER
  const user = req.body;

  const userId = uuidv4();

  // to add userId to all the users
  const userWithId = { ...user, id: userId };

  // ADDING userWithId objct TO users ARRAY which now contains uniwue id's
  users.push(userWithId);

  res.send(`User with the name ${user.firstName} added to the database!`);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  // to find a user with the specific id in our database
  const foundUser = users.find((user) => (user.id = id));

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  // E.g;
  // John's id is 123
  // Janes id is 321
  // id to delete is 123
  // filter function would return all id's that are not equal to john's id = 123
  users = users.filter((user) => {
    // return all id's that are not equal to john's id = 123
    return user.id != id;
  });

  // sending information to user
  res.send(`User with the id ${id} deleted from the database.`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  // take everything coming from 'request.body'
  const { firstName, lastName, age } = req.body;

  // find the user to be updated
  const user = users.find((user) => {
    //   return id that is equal to id being searched
    return user.id == id;
  });

  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;

  // sending information to user
  res.send(`User with the id ${id} has been updated.`);
};
