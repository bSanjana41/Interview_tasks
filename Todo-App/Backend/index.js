import express from "express";
import cors from "cors"
import TaskRoutes from "../Backend/Routes/TaskRoutes.js"
import {config} from "dotenv"
const app = express();
config()
const PORT = process.env.PORT || 3000;
//middlewares
app.use(cors());
app.use(express.json()); 

app.use('/',TaskRoutes);
//Server connection
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 