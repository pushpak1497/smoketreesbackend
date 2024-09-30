import mongoose, { Schema } from "mongoose";

const addressSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  address: [{ type: String, required: true, unique: true }],
});
export const Address = mongoose.model("Address", addressSchema);
