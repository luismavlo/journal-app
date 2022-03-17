import { Navigate } from "react-router-dom"

const PublicRoute = ({ isLoggedIn ,children }) => {

  return !isLoggedIn
        ? children
        : <Navigate to='/' />
}

export default PublicRoute