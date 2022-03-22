// controller is for CRUD
// import the model
const Note = require('../models/note.models')

module.exports = {

    // READ ALL
    findAll : (req, res) => {
        Note.find()
            .then( (allNotes) => {
                return res.json({all: allNotes})
            })
            .catch(err => res.json(err))
    },

    // CREATE 
    create: (req, res) => {
        console.log(req.body);
        Note.create(req.body)
            .then( newNote => res.json(newNote))
            .catch( err => res.json(err))
    },

    // READ ONE
    findOne: (req, res) => {
        console.log(req.params);
        // Note.findOne({_id: req.params.id})
        Note.findById(req.params.unicorn_id)
            .then(note => res.json(note))
            .catch(err => res.json(err))
    },

    // UPDATE
    update: (req, res) => {
        Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators:true
        })
            .then( updatedNote => res.json(updatedNote))
            .catch(err => res.json(err))
    },

    // DELETE
    delete : (req, res) => {
        Note.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }

}