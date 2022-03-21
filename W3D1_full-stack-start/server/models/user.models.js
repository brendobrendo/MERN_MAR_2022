// import mongoose to built a model
const mongoose = require('mongoose');

// the schema - the rules that the entries in the db must follow
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "you must have a {PATH}"],
        minlength: [3, "{PATH} must have at least 3 chars"],
        maxlength: 100
    },
    age: {
        type: Number,
        min: [10, "your {PATH} is not old enough, you gave {VALUE}"]
    }
}, {timestamps: true});

// the model - this is what we use to make the actual queries to them DB
const User = mongoose.model("User", UserSchema);

// export the model
module.exports = User;