import { Navigate } from "react-router-dom"

const PrivateRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn
        ? children
        : <Navigate to='/auth/login' />
}

export default PrivateRoute