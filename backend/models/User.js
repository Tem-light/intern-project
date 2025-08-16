/** @format */

const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
		studentId: {
			type: String,
			unique: true,
			trim: true,
		},
		role: {
			type: String,
			enum: ["admin", "student", "faculty"],
			default: "student",
		},
		department: {
			type: String,
			trim: true,
		},
		year: {
			type: Number,
			min: 1,
			max: 5,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		joinedClubs: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Club",
			},
		],
	},
	{
		timestamps: true,
	}
);

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
