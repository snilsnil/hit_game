const User = require('../models/User');

async function createAdmin() {
    try {
        const existing = await User.findOne({ id: "admin" });

        if (existing) {
            console.log("Admin already exists");
            return;
        }

        const admin = new User({
            id: "admin",
            email: "example@google.com",
            password: "admin", // 
            role: "admin"
        });

        await admin.save();

        console.log("Admin created");
    } catch (err) {
        console.error("Error creating admin:", err);
    }
}

module.exports = createAdmin;