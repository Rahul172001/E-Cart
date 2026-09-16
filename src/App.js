import './App.css';
import React, { lazy,Suspense } from "react"
import Home from "./ECart/Home"
import Error from './Error';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import AppLayout from './AppLayout';
import AboutUs from './Header/AboutUs';
import Pdp from './ECart/Pdp';
import Cart from './Header/Cart';

const Table = lazy(()=>import(/*webpackChunkName : "table-data"*/ "./Table/Table"))
const EmployeeDetails = lazy(()=>import(/* webpackChunkName : "table-data"*/ "./Table/EmployeeDetails"))
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/aboutus",
        element: <AboutUs />
      },
      {
        path:"/table",
        element:<Suspense fallback={<h1>Loading..</h1>}><Table /></Suspense>
      },
      {
        path: '/table/:userid',
        element:<Suspense fallback={<h1>loading...</h1>}><EmployeeDetails /></Suspense>
      },
      {
        path:"/pdp/:productid",
        element:<Pdp />
      },
      {
        path:"/Cart",
        element:<Cart />
      }
    ],
    errorElement:<Error />
  }
])

const App = ()=>{
  return(
    <RouterProvider router={appRouter} />
  )
}
export default App
