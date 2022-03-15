const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        required: true,
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)

userSchema.path('email').validate(async (email) => {
    const emailCount = await mongoose.models.User.countDocuments({ email })
    return !emailCount
  }, 'Email already exists')
  

module.exports = mongoose.model('User', userSchema)