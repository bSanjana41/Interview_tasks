import express,{ Router } from "express"
import User from "./model.js"
const router = Router()


router.get("/", async (req, res) => {
    const { search = "", sortBy = "name", order = "asc", page = 1, limit = 5 } = req.query
    const query = search ? { name: search } : {};
    const sortByOptions = { [sortBy]: order === "asc" ? 1 : -1 }
    const skip = (parseInt(page) - 1) * parseInt(limit)

    try {
        const users = await User.find(query)
            .sort(sortByOptions)
            .skip(skip)
            .limit(parseInt(limit));

        const total = await User.countDocuments(query)
        res.json({users, total})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

export default router