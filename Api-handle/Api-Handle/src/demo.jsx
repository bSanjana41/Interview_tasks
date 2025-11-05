import { useContext } from "react"

function withAuth(wrappedComponent){
    return function ProtectedComponent(props){
        const {isLoggedIn}=useContext(AuthContext)
        if(!isLoggedIn){
            return <h2>Please login</h2>
        }
        return <wrappedComponent {...props}/>
    }
}