const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: false,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
      projects: [{ type: Schema.Types.ObjectId, ref: "Project", required: false }],
  },
  {
   timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
