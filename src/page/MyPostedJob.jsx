import { useEffect, useState } from "react";
import useauth from "../Context/hooks/useauth";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
    const {user}=useauth()
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
fetch(`https://job-portal-server-alpha-two.vercel.app/my_jobs?email=${user.email}`)
.then(res=>res.json())
.then(data=>{
    console.log(data)
    setJobs(data)
})
    },[user.email])
    console.log(jobs)


    const handledelete=(id)=>{
        console.log('delete',id)
        fetch(`https://job-portal-server-alpha-two.vercel.app/jobs/${id}`,
            {
                method:"delete"
            })
            .then(res=>res.json())
            .then(data=>{
                const remain=jobs.filter(job=>job._id!=id)
                setJobs(remain)
                alert('post deleted')
            })
    
    }
    return (
        <div>
        <h2 className="text-2xl items-center">My posted job </h2>

        <div className="overflow-x-auto">
<table className="table">
 {/* head */}
 <thead>
   <tr>
     <th>
       <label>
         <input type="checkbox" className="checkbox" />
       </label>
     </th>
     <th> Company Name</th>
     <th>Job</th>
     <th>Favorite Color</th>
     <th></th>
     <th>remove</th>
     <th> view application</th>
   </tr>
 </thead>
 <tbody>
{
 jobs.map((job,i)=>
       
   <tr>
     <th>
      {
        i+1
      }
     </th>
     <td>
       <div className="flex items-center gap-3">
         <div className="avatar">
           <div className="mask mask-squircle h-12 w-12">
             <img
               src={job.company_logo}
               alt="Avatar Tailwind CSS Component" />
           </div>
         </div>
         <div>
           <div className="font-bold">{job.company}</div>
           <div className="text-sm opacity-50">{job.title}</div>
         </div>
       </div>
     </td>
     <td>
       Zemlak, Daniel and Leannon
       <br />
       <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
     </td>
     <td>Purple</td>
     <th>
       <button className="btn btn-ghost btn-xs">details</button>
     </th>
     <th onClick={()=>handledelete(job._id)} className="btn">
         X
     </th>
     <th>
   <Link to={`/viewapplication/${job._id}`} className="btn "> { job.applicationCount}</Link>
     </th>
   </tr>
)
}

 </tbody>

</table>
</div>
     </div>
 );
};
export default MyPostedJob;