import { useEffect, useState } from "react";
import useauth from "../Context/hooks/useauth";


const MyApplication = () => {
    const {user}=useauth()
    const [jobs,setjobs]=useState()
    
    useEffect(()=>{
 fetch(`http://localhost:3000/job-application?email=${user?.email}`)
 .then(res=>res.json())
 .then(data=>setjobs(data))
    },[user.email])
    console.log(jobs)
    return (
        <div>
            my 
        </div>
    );
};

export default MyApplication;