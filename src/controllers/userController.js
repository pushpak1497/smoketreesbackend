import { User } from "../models/userModel.js";
import { Address } from "../models/addressModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, address } = req.body;
  // console.log(req.body);
  try {
    const user = await User.findOne({ name });

    if (!user) {
      const newUser = await User.create({
        name,
      });
      const newAddress = await Address.create({
        userId: newUser._id,
        address,
      });
      return res.status(200).json({
        message: "user created",
        newUser,
        newAddress,
      });
    }
    await Address.updateOne(
      { userId: user._id },
      { $push: { address: address } }
    );
    const newAddress = await Address.findOne({ userId: user._id });
    return res.status(200).json({ message: newAddress });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
