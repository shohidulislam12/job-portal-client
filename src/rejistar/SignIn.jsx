import Lottie from "lottie-react";
import  loginLotiData from '../assets/lotie/liginlotti.json'
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.init";
import axios from "axios";
const SignIn = () => {
    const {signinuser,googlelogin}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    const form=location?.state||'/'
    console.log(location)
    const handlesubmit=(e)=>{
        e.preventDefault()
       
        const password=e.target.password.value
        const email=e.target.email.value
        const user={email,password}
        signinuser(email,password)
        .then((userCredential) => {
          
            const user={email:email}
          axios.post('https://job-portal-server-alpha-two.vercel.app/jwt',user,{withCredentials:true})
           .then(res=>console.log(res.data))
            useNavigate(form)
           console.log(userCredential)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          console.log(errorMessage)
          }); 
    }
    const handlegoogle=()=>{
      googlelogin()
      .then((result) => {
       navigate(form)
       console.log(result)
      }).catch((error) => {
       
        const errorMessage = error.message;
     console.log(errorMessage)
      });
    }  
    return (
        <div className="mx-auto flex items-center justify-center flex-col md:flex-row">
       <form onSubmit={handlesubmit} className="card-body w-1/2">
       <h2>signin  now </h2>

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
        <Link className='text-red-600' to='/registar'>registar</Link>
      </form>
  <div className="w-1/2">
  <Lottie animationData={loginLotiData}></Lottie>
  </div>
  <div>
<button onClick={handlegoogle}>loginWithGoogle</button>

  </div>
        </div>
    );
};

export default SignIn;