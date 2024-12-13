import { useEffect, useState } from "react";
import Jobcard from "./Jobcard";
import useauth from "../hooks/useauth";

const Jobscollection = () => {
    const {user}=useauth()
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
       
    },[])
  
    return (
        <div className="my-10">
            <h2>Jobs{jobs.length}</h2>
            <div className="grid sm:grid-cols-4 gap-3 grid-cols-1">
            {
                jobs.map((job,i)=><Jobcard key={i} job={job}></Jobcard>)
            }
            </div>
        </div>
    );
};

export default Jobscollection;