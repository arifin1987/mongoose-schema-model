const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-student')
.then(()=> console.log('mongodb connected successfully'))
.catch(err=> console.log('connection failed'));

//  Schema 
// use new key word when create object from a class
const studentSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: String,
    dob:Date,
    entryDate: { type: Date, default:Date.now},
    passed: Boolean,
    hobbies:[String],
    parents:{
        father: String,
        mother: String,
    },
    subjects: [{name:String, marks: {type:Number, min:0, max:180}}]

});

// Model

const Student = mongoose.model('Student',studentSchema); //Class

const student = new Student({
    firstName: "Rahim",
    lastName: "Ahmed",
    dob: new Date("30 december 1987"),
    passed: true,
    hobbies:["Swiming", "Singing"],
    parents:{
        father: "Abdul",
        mother: "Rahima"
    },
    subjects:[{name:"English", marks:80 }, {name: "Math", mark:90}]
})

student.save()
.then(data => console.log(data))