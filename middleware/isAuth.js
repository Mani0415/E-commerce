import jwt from "jsonwebtoken";
import { User } from "../model/userModel.js";

export const isAuth = async (req, res, next) => {
    try {
        // Log headers to check if the token is present
        console.log('Request Headers:', req.headers);

        // Extract token from 'Authorization' header
        const authHeader = req.headers.authorization;
        const auth = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

        if (!auth) {
            return res.status(403).json({
                message: "Please login to access"
            });
        }

        // Verify token
        const decodedData = jwt.verify(auth, process.env.JWT_SECRET);
        console.log('Decoded Data:', decodedData); // Log decoded data for debugging

        // Find user by ID from token payload
        const user = await User.findById(decodedData._id);
        if (!user) {
            return res.status(403).json({
                message: "User not found"
            });
        }

        // Attach user to request object
        req.user = user;
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        // Log the error for debugging
        if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({ message: "Invalid token. Please login to access" });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(403).json({ message: "Token expired. Please login again" });
        } else {
            console.error('Unexpected error:', error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
};
