/** @format */

const User = require("../models/User");

const createDefaultAdmin = async () => {
	try {
		// Check if admin already exists
		const adminExists = await User.findOne({
			username: "admindbu12",
		});

		if (!adminExists) {
			const admin = await User.create({
				name: "System Administrator",
				username: "admindbu12",
				email: "admin@example.com", // Add an email for the admin
				password: "Admin123#", // Make sure to hash this in production
				role: "admin",
				isAdmin: true,
				department: "Administration",
				year: 1, // Ensure this is a valid number
			});

			console.log("Default admin user created:", admin.username);
		}

		// Create some sample students for testing
		const sampleStudents = [
			{
				name: "John Doe",
				username: "dbu10304058",
				email: "john.doe@example.com", // Add an email for the student
				password: "Student123#", // Make sure to hash this in production
				role: "student",
				isAdmin: false,
				department: "Computer Science",
				year: 4, // Ensure this is a valid number
			},
			{
				name: "Jane Smith",
				username: "dbu10304059",
				email: "jane.smith@example.com", // Add an email for the student
				password: "Student123#", // Make sure to hash this in production
				role: "student",
				isAdmin: false,
				department: "Engineering",
				year: 3, // Ensure this is a valid number
			},
		];

		for (const studentData of sampleStudents) {
			const existingStudent = await User.findOne({
				username: studentData.username,
			});
			if (!existingStudent) {
				const student = new User(studentData);
				await student.save();
				console.log(`Sample student created: ${studentData.username}`);
			} else {
				console.log(`Student already exists: ${studentData.username}`);
			}
		}
	} catch (error) {
		console.error("Error creating default users:", error);
	}
};

module.exports = { createDefaultAdmin };
