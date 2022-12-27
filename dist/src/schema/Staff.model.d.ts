import mongoose from "mongoose";
declare const Staff: mongoose.Model<{
    maNV?: string;
    name?: string;
    age?: number;
    salary?: number;
    branch?: mongoose.Types.ObjectId;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    maNV?: string;
    name?: string;
    age?: number;
    salary?: number;
    branch?: mongoose.Types.ObjectId;
}>>;
export { Staff };
