import axios from "axios";
import { useEffect } from "react";
import useauth from "../../Context/hooks/useauth";
import { Navigate, useNavigate } from "react-router-dom";

const axiosInstance=axios.create({
    baseURL:'https://job-portal-server-alpha-two.vercel.app/job-portal-server',
    withCredentials:true
})
const useAxios = () => {
    const {signOutuser}=useauth()
    const  navigate=useNavigate()
useEffect(()=>{
axiosInstance.interceptors.response.use(
    response=>{
        return response

          },
          error=>{
            console.log('error cougth in interceptor',error)
            if( error.status===401||error.status===403){
                signOutuser()
                .then(()=>{
                    console.log('logoutUSer')
                    navigate('/signin')
                })
                .catch(error=>console.log(error))
               
            }
            return Promise.reject(error)
          }

)
},[])

    return axiosInstance
};

export default useAxios;