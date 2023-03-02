const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-student')
.then(()=> console.log('mongodb connected successfully'))
.catch(err=> console.log('connection failed'));


// use new key word when create object from a class
const studentSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: String,
    dob:Date,
    entryDate: { type: DataTransfer, default:Date.now},
    passed: Boolean,
    hobbies:[String],
    parents:{
        father: String,
        mother: String,
    },
    subjects: [{name:String, marks: {type:Number, min:0, max:180}}]

});


