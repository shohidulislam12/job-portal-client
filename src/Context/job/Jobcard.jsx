import { Link, NavLink } from "react-router-dom";

const Jobcard = ({job}) => {
    const {company_logo,_id,location,company,description,requirements,salaryRange,}=job
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
    requirements?.map((sk,index)=><p key={index} className="border rounded-md p-2 hover:text-blue-600 hover:bg-slate-400 ">{sk}</p>)
}
</div>
          </div>
          <p>Salaray:{salaryRange.min}-{salaryRange.max} <span>{salaryRange.currency}</span></p>
          <div className="card-actions">
            <Link to={`/jobs/${_id}`} className="btn btn-primary">Apply</Link>
          </div>
        </div>
      </div>
    );
};

export default Jobcard;