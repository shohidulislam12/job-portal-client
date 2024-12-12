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
    path:'/jobs/:id',
    element:<PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
    loader: ({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
  
  },
  {
    path:'/jobapply/:id',
    element:<PrivetRoute><ApplyJob></ApplyJob></PrivetRoute>,
    loader: ({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
  
  },
  {
    path:'myapplication',
    element:<PrivetRoute><MyApplication></MyApplication></PrivetRoute>,
   
  
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
