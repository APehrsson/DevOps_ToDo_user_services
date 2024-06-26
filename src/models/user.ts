import mongoose, { Document, Schema } from 'mongoose';

interface UserInterface extends Document {
  username: string;
  password: string;
}

const UserSchema = new Schema<UserInterface>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model<UserInterface>('User', UserSchema);

export default User;
