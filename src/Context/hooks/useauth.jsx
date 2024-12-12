import { useContext } from "react";
import AuthContext from "../AuthContext";

const useauth = () => {
const context=useContext(AuthContext)
return context
};

export default useauth;