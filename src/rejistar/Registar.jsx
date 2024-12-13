import Lottie from "lottie-react";
import  registarLotiData from '../assets/lotie/registar.json'
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const Registar = () => {
  const  navigate=useNavigate()
    const {creatuser}=useContext(AuthContext)
    const handlesubmit=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const password=e.target.password.value
        const email=e.target.email.value
        const user={name,email,password}
        creatuser(email,password)
        .then((userCredential) => {
          
            const user = userCredential.user;
            console.log(user)
            navigate('/')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          console.log(errorMessage)
          });
        
       
    }
    return (
        <div className="mx-auto flex items-center justify-center flex-col md:flex-row">
       <form onSubmit={handlesubmit} className="card-body w-1/2">
       <h2>registar now </h2>
        <div className="form-control ">
           
         
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control ">
           
         
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
 
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
 
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <Link className='text-red-600' to='/signin'>registar</Link>
      </form>
  <div className="w-1/2">
  <Lottie animationData={registarLotiData}></Lottie>
  </div>
        </div>
    );
};

export default Registar;