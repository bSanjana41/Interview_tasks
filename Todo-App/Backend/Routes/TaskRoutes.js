import { Router } from "express"
const router = Router()
let  tasks = []
let id = 1

router.use((req, res, next) => {
  next();
}); 

router.get("/alltasks", (req, res) => {
    try {
        res.json(tasks)
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch tasks",
            error: error.message
        })
    }
})
router.post("/newtask", (req, res) => {
    try {
        const { title } = req.body
        if (!title) return res.status(400).json({ message: "title is required" })
        const newTask = { id: id++, title, completed: false }
        tasks.push(newTask)
        res.status(200).json({message:"succesfully added task", tasks })
    } catch (error) {
        res.status(400).json({
            message: "Failed to create tasks",
            error: error.message
        })
    }
})

router.put("/updatetask/:id", (req, res) => {
    try {
        const { id } =req.params
        const parsedId=parseInt(id)
        const task = tasks.find((t)=>t.id==parsedId)
            console.log("Update request for ID:", id);
    console.log("Matched task:", task);
        if (!task) return res.status(400).json({ message: "task not found" })
        task.completed = true
        res.status(200).json({message:"succesfully updated task", task })
    } catch (error) {
        res.status(500).json({
            message: "Failed to update tasks..",
            error: error.message
        })
    }
})
router.delete("/deletetask/:id", (req, res) => {
    
    try {
        const { id } =req.params
        const parsedId=parseInt(id)
        const task = tasks.find((t)=>t.id==parsedId)
        if (!task) return res.status(400).json({ message: "task not found" })
         tasks = tasks.filter((t) => t.id !== parsedId)
        res.status(200).json({message:"succesfully deleted task", tasks })
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete task",
            error: error.message
        })
    }
})
export default router 