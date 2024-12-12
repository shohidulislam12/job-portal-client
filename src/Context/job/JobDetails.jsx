import { NavLink, useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const job=useLoaderData()
    const {company_logo,_id,location,company,responsibilities,status,description,requirements,salaryRange,}=job
    return (
        <div className="card bg-base-100 flex flex-col justify-between  shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={company_logo}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className=" text-left">
          <h2 className="card-title">{company}</h2>
          <p>{location}</p>
          <p>{description}</p>
          <div>
            <p>Skills</p>
<div className=" flex items-center flex-row flex-wrap gap-2 ">
{
    requirements.map(sk=><p className="border rounded-md p-2 hover:text-blue-600 hover:bg-slate-400 ">{sk}</p>)
}
</div>
          </div>
          <div>
            <p>Responsibilities</p>
<div className="  items-center  ">
{
    responsibilities.map(sk=><p className="border rounded-md p-2 hover:text-blue-600 hover:bg-slate-400 ">{sk}</p>)
}
</div>
          </div>
          <p>Salaray:{salaryRange.min}-{salaryRange.max} <span>{salaryRange.currency}</span></p>

        </div>
        <div>
            <p>Apply For{company}</p>
            <NavLink to={`/jobapply/${_id}`}>Apply Now</NavLink>
        </div>
      </div>
    );
};

export default JobDetails;