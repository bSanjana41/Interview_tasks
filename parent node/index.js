import cors from 'cors';
import express from "express"
const app = express();
const PORT = 5000;
import searchRoutes from "./search sort pagination/backend/searchRoutes.js"
import mongoose from 'mongoose';
// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/search',searchRoutes);
// Add more routes as needed

// Root check
app.get('/', (req, res) => {
  res.send('Central Node.js Backend is running');
});

const DbConnect = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/interview", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`✅ Database is connected at ${conn.connection.host}`);

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Database connection failed:", error.message);
    process.exit(1); // Optional: exit if DB fails
  }
};

DbConnect();
