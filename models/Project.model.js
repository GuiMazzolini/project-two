const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    course: {
      type: String,
      required: true,
      trim: true,
        },
        
    image: {type: String},

    description: {
      type: String,
      required: true,
      trim: true,
    },
    url_website: { type: String },
    
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },

    url_github: { 
      type: String
    }
  },
  {
   timestamps: true,
  }
);

const Project = model("Project", projectSchema);

module.exports = Project;
