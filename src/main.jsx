import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './layout/Mainlayout.jsx';
import Home from './page/home/Home.jsx';
import Registar from './rejistar/Registar.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import SignIn from './rejistar/SignIn.jsx';
import Banner from './page/home/Banner.jsx';
import Jobscollection from './Context/job/Jobscollection.jsx';
import Footer from './shared/Footer.jsx';
import JobDetails from './Context/job/JobDetails.jsx';
import PrivetRoute from './Context/PrivetRoute.jsx/PrivetRoute.jsx';
import ApplyJob from './page/ApplyJob.jsx';
import MyApplication from './page/MyApplication.jsx';
import Addjob from './Context/addjob/Addjob.jsx';
import MyPostedJob from './page/MyPostedJob.jsx';
import ViewApplications from './page/ViewApplications.jsx';
import { param } from 'motion/react-client';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout></Mainlayout>,
    errorElement: <h2>no element found </h2>,
    children:[
      {
        path: "/",
    element:<Banner></Banner>
      },

      {
        path: "/registar",
    element:<Registar></Registar>
  },
      {
        path: "/signin",
    element:<SignIn></SignIn>
  },
      {
        path: "/addjob",
    element:<PrivetRoute><Addjob></Addjob></PrivetRoute>
  },
      {
        path: "/myposted",
    element:<PrivetRoute><MyPostedJob></MyPostedJob></PrivetRoute>
  },
  {
    path:'/jobs/:id',
    element:<PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
    loader: ({params})=>fetch(`https://job-portal-server-alpha-two.vercel.app/jobs/${params.id}`)
  
  },
  {
    path:'/jobapply/:id',
    element:<PrivetRoute><ApplyJob></ApplyJob></PrivetRoute>,
    loader: ({params})=>fetch(`https://job-portal-server-alpha-two.vercel.app/jobs/${params.id}`)
  
  },
  {
    path:'myapplication',
    element:<PrivetRoute><MyApplication></MyApplication></PrivetRoute>,
   
  
  },
  {
    path:'viewapplication/:id',
    element:<PrivetRoute><ViewApplications></ViewApplications></PrivetRoute>,
    loader:({params})=>fetch(`https://job-portal-server-alpha-two.vercel.app/job-application/jobs/${params.id}`)
   
  
  }

    
    ]
  },
  {
    path: "/",
element:<Footer></Footer>
  },
]);
createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
 </AuthProvider>
)
