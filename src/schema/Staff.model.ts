
import mongoose, {Schema} from "mongoose";


const StaffSchema = new mongoose.Schema({
    maNV: String,
    name: String,
    age: Number,
    salary:Number,
    branch: {type:Schema.Types.ObjectId,ref:'Branch'}
})

const Staff = mongoose.model("Staff", StaffSchema)

export {Staff};
