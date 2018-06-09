
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user');
const seedData = require('./user');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db connect successfully');
});


let UserSchema = new mongoose.Schema({
  name: String,
  description: String
});

let User = mongoose.model('user', UserSchema);

GetUserById = (id) => {
  User.GetUserById(id, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  });
};


GetUsers = (params) => {
  User.find(params, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  });
};

AddUser = (modelInfo) => {
  let newuser = new User(modelInfo);
  newuser.save();
  console.log(`User created - ${newuser.name}`);
};


UpdateUser = (modelInfo, data) => {
  User.findOneAndUpdate({_id: modelInfo.id}, data,
    {new: true},
    (err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
  });
};


deleteUser = (id) => {
  User.findOneAndRemove({_id: id}, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  });
};

seedData.forEach((user) => {
  AddUser(user);
});







const express = require('express');
const app = express();

// Requiring the db file will execute its contents and initiate the mongodb connection
require('./db');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Requiring the api file will get the exported function from the file
const api = require('./api/index');
// Now we will pass app to the function to register the routers within the api/index.js file
api(app);

let port = 3000;
app.listen(port, () => {
  console.log('Listening on port ' + port);
});


