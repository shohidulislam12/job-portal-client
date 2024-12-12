import { useEffect, useState } from "react";
import Jobcard from "./Jobcard";

const Jobscollection = () => {
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
       
    },[])
    console.log("data")
    return (
        <div className="my-10">
            <h2>Jobs{jobs.length}</h2>
            <div className="grid sm:grid-cols-4 gap-3 grid-cols-1">
            {
                jobs.map(job=><Jobcard job={job}></Jobcard>)
            }
            </div>
        </div>
    );
};

export default Jobscollection;