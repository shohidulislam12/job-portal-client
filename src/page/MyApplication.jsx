import { useEffect, useState } from "react";
import useauth from "../Context/hooks/useauth";
import { div } from "motion/react-client";


const MyApplication = () => {
    const {user}=useauth()
    const [jobs,setjobs]=useState([])
    // {
    //     "_id": "675ad356c5e52b3d939eb94b",
    //     "jobid": "675aa71709ae0e0dcd00fc4e",
    //     "applicant_email": "shohidulislamsifat2003@gmail.com",
    //     "github": "https://github.com/shohidulislam12",
    //     "linkdIn": "http://localhost:5173/jobapply/675aa71709ae0e0dcd00fc4e",
    //     "resume": "http://localhost:5173/jobapply/675aa71709ae0e0dcd00fc4e",
    //     "title": "Marketing Specialist",
    //     "company": "GoatMark Inc",
    //     "company_logo": "https://i.ibb.co/TvvzXfq/google.png"
    // },
    useEffect(()=>{
 fetch(`http://localhost:3000/job-application?email=${user?.email}`)
 .then(res=>res.json())
 .then(data=>setjobs(data))
    },[user.email])
    console.log(jobs)


const handledelete=(id)=>{
    console.log('delete',id)
    fetch(`http://localhost:3000/job-application/${id}`,
        {
            method:"delete"
        })
        .then(res=>res.json())
        .then(data=>{
            const remain=jobs.filter(job=>job._id!=id)
            setjobs(remain)
        })

}


    return (
        <div>
           <h2 className="text-2xl items-center">My Applications </h2>

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
      </tr>
    </thead>
    <tbody>
{
    jobs.map(job=>
          
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
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
      </tr>
   )
}

    </tbody>

  </table>
</div>
        </div>
    );
};

export default MyApplication;