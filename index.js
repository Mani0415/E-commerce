import express from 'express';
import connectDB from './lib/db.js';
import dotenv from "dotenv"
import cors from 'cors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path'; // Import path module

dotenv.config()
const app = express();

// Middleware
app.use(express.json());

app.use("/uploads",express.static("uploads"));

app.use(cors());

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './public')));

// Import routes and models
import registerRoutes from './routes/userRoute.js';
import ProductRoutes from './routes/productroute.js'
import { User } from './model/userModel.js';
import { Product } from './model/Product.js';


// Use routes
app.use('/api/v1/user', registerRoutes); // Use your userRoute here
app.use('/api/v1/product',ProductRoutes);

// Define a GET route for /api
app.get('/api/v1/user', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});
app.get("/api/v1/product", async (req, res) => {
  try {
    const product = await Product.find({});
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
// Connect to the database and start the server
const startServer = async () => {
    try {
        await connectDB(); // Ensure DB connection is established before starting the server
        app.listen(3000, () => {
            console.log('Server running on port 3000...');
        });
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
};
startServer();