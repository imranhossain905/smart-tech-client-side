import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import Dashboard from "../Dashboard/Dashbord/Dashboard";
import Myproduct from "../Dashboard/MyProduct/MyPrduct";
import About from "../Home/About/About";
import Home from "../Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Page404 from "../Pages/SharePages/Page404/Page404";
import Laptop from "../Pages/SharePages/ProductDetail/Laptopdetail/Laptop";
import Parts from "../Pages/SharePages/ProductDetail/Parts/Parts";
import Dasktop from "../Pages/SharePages/ProductDetail/pcDetail/Dasktop";
import Detail from "../Pages/SharePages/ProductDetail/show/Detail";



const router = createBrowserRouter([

    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/login',
                element: <Login/>               

            },
            {
                path: '/laptop',
                element: <Laptop/>               

            },
            {
                path: '/parts',
                element: <Parts/>               

            },
            {
                path: '/dasktop',
                element: <Dasktop/>            

            },
            {
                path: '/detail',
                element: <Detail/>               

            },            
            {
                path: '/*',
                element: <Page404/>             

            } ,
            {
                path:'/addProduct',
                element:<AddProduct/>
            },
            {
                path:'/myproduct',
                element:<Myproduct/>
            },          

        ]        

    },

    {
        path:'/dashboard',
        element: <DashboardLayout> <Dashboard/></DashboardLayout>,
        children: [
            {
                path:'/dashboard/myproduct',
                element:<Myproduct/>
            },
            {
                path:'/dashboard/addProduct',
                element:<AddProduct/>
            },
        ]
    },
]);

export  default router;