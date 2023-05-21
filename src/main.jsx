import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import AddToys from './Pages/addToys/AddToys.jsx';
import MyToys from './Pages/myToys/MyToys.jsx';
import AllToys from './Pages/allToys/AllToys.jsx';
import Blog from './Pages/blog/Blog.jsx';
// import AllToysDetails from './Pages/addToys/AllToysDetails.jsx';
import CategoryDetails from './Component/CategoryDetails/CategoryDetails.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import PrivateRoutes from './Pages/PrivateRoutes/PrivateRoutes.jsx';
// import Update from './Pages/myToys/Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addToys",
        element: <AddToys></AddToys>,
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      // {
      //   path: '/update/:id',
      //   element: <Update></Update>,
      //   loader: ({ params }) => fetch(`http://localhost:5000/allJobs/${params.id}`)
      // },

      // all jobs
      {
        path: '/allJobs/:id',
        element: <PrivateRoutes><CategoryDetails></CategoryDetails></PrivateRoutes>,
        // loader: ({ params }) => fetch(`http://localhost:5000/allJobs/${params.id}`)
      }




    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

