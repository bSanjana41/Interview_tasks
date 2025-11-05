import mongoose from "mongoose"


const DbConnect = async () => {
    try {
        const mongo_url = process.env.MONGO_URL
        const conn = await mongoose.connect(mongo_url)
        console.log(`Datatbase connected on ${conn.connection.host}`)
    } catch (error) {
        console.log(`Failed to connect database :${error}`)
        process.exit(1);  
    }
}
export default DbConnect