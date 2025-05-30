import { useState, useEffect } from "react"
import axios from "axios"

const SearchSort=()=>{
const [search, setSearch] = useState("")
const [users, setUsers] = useState([])
const [sortBy, setSortBy] = useState("name")
const [page, setPage] = useState(1)
const [order, setOrder] = useState("asc")
const [total,setTotal]=useState(0)

const limit= 5

const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/search", { params: { search, order, sortBy, page, limit: 5 } })
    setUsers(res.data.users)
    setTotal(res.data.total)

}
useEffect(() => {
    fetchUsers()
}, [search, sortBy, order, page])

const totalPages = Math.ceil( total / limit);

return (
    <>
        <input
            value={search} onChange={(e) => setSearch(e.target.value)}>
        </input>
        <select onChange={(e) => setSortBy(e.target.value)}>
            <option value={"name"}>Name</option>
            <option value={"age"}>Age</option>
        </select>
        <select onChange={(e) => setOrder(e.target.value)}>
            <option value={"asc"}>Asc</option>
            <option value={"desc"}>Desc</option>
        </select>
        <ul>
            {users.map((u) => (
                <li key={u.id}>{u.name}-{u.age}</li>
            ))}
        </ul>
<button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
<button disabled={page===totalPages} onClick={()=>setPage(page+1)}>Next</button>
    </>
)
}
export default SearchSort