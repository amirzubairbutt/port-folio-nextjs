import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document{
    name: string;
    username: string;
    password: string;
    status: boolean;

}

const userSchema:Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    status:{
        type: Boolean,
        required: true,
    }
}) 

const User = mongoose.model<IUser>('User', userSchema);

export default User;