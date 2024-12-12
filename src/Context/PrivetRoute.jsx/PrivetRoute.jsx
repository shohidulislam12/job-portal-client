import { useContext } from "react";
import AuthContext from "../AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const loation=useLocation()
    if(loader){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/signin' state={loation?.pathname}> </Navigate>
};

export default PrivetRoute;