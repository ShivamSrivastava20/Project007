const { default: mongoose } = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const Schema=mongoose.Schema;
const userSchema=new Schema ({
    email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    username: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    gender: {type:String , unique:true , lowercase:true},
    state: {type:String  , lowercase:true},
    city: {type:String  , lowercase:true},
   mobile: {type:Number  ,unique:true ,  lowercase:true},
    DOB: {type:String  , lowercase:true},
    password: {type:String },

},{timestamp : true})
userSchema.plugin(uniqueValidator, {message: 'is already taken.'});

module.exports=mongoose.model('USER ' ,userSchema);