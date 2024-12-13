import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const candidate = useLoaderData();
const handlestatusupdate=(e,id)=>{
 console.log(e.target.value,id)
 const data={
    status:e.target.value
 }
 fetch(`http://localhost:3000/job-application/jobs/${id}`,{
    method:"PATCH",

    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(data)
  
 })
 .then(res=>res.json())
 .then(data=>{
    console.log(data)
 })
}
  return (
    <div>
      <h2 className="text-2xl items-center">My Posted Jobs</h2>
      {/* Add the table or other content here using 'candidate' */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Company Name</th>
              <th>Job</th>
              <th>Email</th>
              <th>Update status</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {candidate.map((job, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{job.company_name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.job_title}
                  <br />
                  <span className="badge badge-ghost badge-sm">{job.job_description}</span>
                </td>
                <td>{job.applicant_email}</td>
                <td>
                <select 
                onChange={(e)=>handlestatusupdate(e,job._id)}
                defaultValue={job.status||'change status'}
                className="select select-bordered select-xs w-full max-w-xs">
  <option disabled selected>change status</option>
  <option>underReview</option>
  <option>set interview</option>
  <option>Hired</option>
  <option>Rejected</option>
</select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
