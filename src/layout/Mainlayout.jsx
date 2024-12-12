import { Outlet } from "react-router-dom";
import Home from "../page/home/Home";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
           
        </div>
    );
};

export default Mainlayout;