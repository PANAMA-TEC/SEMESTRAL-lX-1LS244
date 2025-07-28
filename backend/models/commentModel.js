import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recipeID: {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
      required: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    createdAt: {
      type: Date,
      default: () => new Date(),
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/**
 * Represents a Comment Model
 * @typedef {Object} CommentModel
 * @property {String} _id          - The unique identifier of the comment.
 * @property {String} user         - The ObjectId of the user who made the comment.
 * @property {String} recipe       - The ObjectId of the recipe being commented.
 * @property {String} text         - The content of the comment.
 * @property {Date}   createdAt    - The date when the comment was created.
 * @property {Date}   updatedAt    - The date when the comment was last edited.
 */

export default model("Comment", commentSchema);

export const CommentSchema = {
  $id: "Comment",
  type: "object",
  required: ["user", "recipe", "text"],
  properties: {
    _id: {
      type: "string",
      description: "Unique identifier of the comment.",
    },
    user: {
      type: "string",
      description: "ObjectId of the user who made the comment.",
    },

    recipe: {
      type: "string",
      description: "ObjectId of the recipe being commented.",
    },
    text: {
      type: "string",
      description: "The content of the comment.",
    },
    createdAt: {
      type: "string",
      format: "date-time",
      description: "Timestamp when the comment was created.",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
      description: "Timestamp when the comment was last updated.",
    },
  },
};
