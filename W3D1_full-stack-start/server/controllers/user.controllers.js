// --- CONTROLLER -  is what will all the CRUD
// import the model here!
const User = require("../models/user.models");

// READ ALL
module.exports.findAllUsers = (req, res) => {
    // db.users.find()
    User.find()
        // IMPORTANT what we return here is what we will receive in REACT!
        .then(allDaUsers => {
            console.log(allDaUsers);
           return res.json(allDaUsers)
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// READ ONE
module.exports.findOneSingleUser = (req, res) => {
    // /api/users/:id
    console.log(req.params);
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => res.json({ user: oneSingleUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// CREATE
module.exports.createNewUser = (req, res) => {
    console.log(req.body);
    const {name, age} = req.body;
    // User.create({name: name, age: age})
    User.create(req.body)
        .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// UPDATE
module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    //          AXIOS
            // res.data   ] ->  res.data.user
        .then(updatedUser => res.json({ user: updatedUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingUser = (req, res) => {
    // /api/users/:id
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
