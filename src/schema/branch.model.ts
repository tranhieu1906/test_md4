
import mongoose, {Schema} from "mongoose";


const branchSchema = new mongoose.Schema({
    name: String
})

const Branch = mongoose.model("Branch", branchSchema)

export {Branch};
