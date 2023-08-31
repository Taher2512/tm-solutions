import mongoose, {Schema} from 'mongoose'
const model=new Schema({
    name:String,
    email:String,
    subject:String,
    description:String,
    date:String
})
const UserQuery=mongoose.models.userQuery||mongoose.model('userQuery',model)
export default UserQuery