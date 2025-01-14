import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location.pathname);
    
    const {user, loading} = useContext(Authcontext);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    if(user){
        return children;

    }
    return  <Navigate state={location.pathname} to="/login"></Navigate>
        
    ;
};

export default PrivateRoute;