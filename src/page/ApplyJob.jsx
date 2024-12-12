
import  registarLotiData from '../assets/lotie/registar.json'
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useauth from '../Context/hooks/useauth';
const ApplyJob = () => {
    const job=useLoaderData()
    const {company_logo,_id,location,company,responsibilities,status,description,requirements,salaryRange,}=job
    const {user}=useauth()
    console.log(" applying user is ",user.email)
    const navigate=useNavigate()
    const handlesubmit=(e)=>{
        e.preventDefault()
       
        const linkdIn=e.target.linkdIn.value
        const github=e.target.github.value
        const resume=e.target.resume.value
       
       const jobApplication={
        jobid:_id,
        applicant_email:user.email,
        github,linkdIn,resume
       }
      fetch('http://localhost:3000/job-application',{
   method:"POST",
   headers:{
    'content-type':'application/json'
   },
   body:JSON.stringify(jobApplication)


      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        navigate('/myapplication')
        return alert('success')
      })
    }
    return (
        <div className="mx-auto flex items-center justify-center flex-col md:flex-row">
       <form onSubmit={handlesubmit} className="card-body w-1/2">
       <h2>Apply for {company} </h2>
        <div className="form-control ">
           
         
          <label className="label">
            <span className="label-text">linkdIn</span>
          </label>
          <input type="text" name="linkdIn" placeholder="linkdIn" className="input input-bordered" required />
        </div>
        <div className="form-control ">
           
         
          <label className="label">
            <span className="label-text">github</span>
          </label>
          <input type="text" name="github" placeholder="github" className="input input-bordered" required />
        </div>
 
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume</span>
          </label>
          <input name="resume" type="text" placeholder="resume" className="input input-bordered" required />
 
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      
      </form>
 
        </div>
    );
};

export default ApplyJob;