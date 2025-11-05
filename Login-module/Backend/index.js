import express, { urlencoded } from "express"
import cors from "cors"
import { config } from "dotenv"
config()
import AuthRoutes from "./Routes/AuthRouter.js"
import DbConnect from "./db.js"
const app = express()

const Port = process.env.BACKENDPORT || 3500

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use("/auth",AuthRoutes)
const startServer = async () => {
    try {
        await DbConnect()
        app.listen(Port, () => {
            console.log(`Server is running on http://localhost:${Port}`)
        })
    }catch (error) {
            console.error("server failed to connect")
            process.exit(1)
        }
    }

startServer()