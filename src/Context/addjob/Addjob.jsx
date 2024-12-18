import { Navigate, useNavigate } from "react-router-dom";
import useauth from "../hooks/useauth";

const Addjob = () => {
    const navigate=useNavigate()
    const {user}=useauth()
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("submit")
        const title=e.target.title.value
        const location=e.target.location.value
        const jobType=e.target.jobType.value
        const category=e.target.category.value
        const applicationDeadline=e.target.applicationDeadline.value
        const min=e.target.min.value
        const max=e.target.max.value
        const currency=e.target.currency.value
        const description=e.target.description.value
        const company=e.target.company.value
        const responsibility=e.target.responsibility.value
        const company_logo=e.target.company_logo.value
        const responsiblity1=responsibility.split('\n')
  
        const hr_email=e.target.hr_email.value
        const hr_name=e.target.hr_name.value
      const   salaryRange={
           min:min, 
            max:max,
            currency:currency
        }
        const post={
            title,location,jobType,category,  applicationDeadline,salaryRange,hr_name,hr_email,responsiblity1,company,description,company_logo
        }
        
        fetch('https://job-portal-server-alpha-two.vercel.app/jobs',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(post)
        
        })
        .then(res=>res.json())
        .then(data=>{
            alert('successfuly added')
            navigate('/myposted')
            console.log(data)
        })

      
    }
    return (
        <div className="">
           <h2 className="text-2xl ">Post a new job</h2>
           <form className="flex flex-col items-start" onSubmit={handleSubmit}>
    <div>
    <label>
         <span> Job Title:</span>
          <input type="text" name="title" className="input input-bordered "  required />
        </label>
    </div>
   <div>
   <label>
          Location:
          <input type="text" name="location" className="input input-bordered " required />
        </label>
   </div>
<div>
<label>
          Job Type:
          <input type="text" name="jobType" className="input input-bordered " required />
        </label>
</div>
     <div>
     <label>
          Category:
          <input type="text" name="category" className="input input-bordered " required />
        </label>
     </div>
    <div>
    <label >
        <span>  Application Deadline:</span>
          <input type="date" className="input input-bordered " name="applicationDeadline"  required />
        </label>
    </div>
 <div className="flex">
 <label>
          Salary Range (Min):
          <input type="number" name="min"  placeholder="min" className="input input-bordered " required />
        </label>
        <label>
          Salary Range (Max):
          <input type="number" name="max" placeholder="max" className="input input-bordered " required />
        </label>
 </div>
    
        <div>
        <label>
          Salary Currency:
          <input type="text" className="input input-bordered " name="currency"  required />
        </label>
        </div>
     <div>
     <label>
          Description:
          <textarea name="description" className="input input-bordered " required />
        </label>
     </div>
       <div>
       <label>
          Company:
          <input type="text" name="company" className="input input-bordered " required />
        </label>
       </div>
        {/* <label>
          Requirements (Comma-separated):
          <input type="text" value={formData.requirements.join(", ")} onChange={(e) => handleArrayChange(e, "requirements")} required />
        </label> */}
    <div>
    <label>
          Responsibilities (Comma-separated):
          <textarea type="text" name="responsibility" className="input input-bordered " required />
        </label>
    </div>
 <div>
 <label>
          HR Email:
          <input type="email" name="hr_email" defaultValue={user.email} className="input input-bordered "  required />
        </label>
 </div>
  <div>
  <label>
          HR Name:
          <input type="text" name="hr_name" className="input input-bordered " required />
        </label>
  </div>
    <div>
    <label>
          Company Logo URL:
          <input type="url" name="company_logo"className="input input-bordered " required />
        </label>
    </div>
        <button className="btn btn-primary">Submit </button>
      </form>
        </div>
    );
};

export default Addjob;