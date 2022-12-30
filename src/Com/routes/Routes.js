
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Login from "../AUth/Login";
import Signup from "../AUth/Signup";
import Home from "../Home/Home";
import PrivateRoute from "../Home/PrivateRoute";
import Main from "../Home/Shared/Layout/Main";
import Com from "./Com";
import Comment from "./Comment";
import Explore from "./Explore";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [{
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
            path: '/explore',
            element: <PrivateRoute><Explore></Explore></PrivateRoute>,
            loader: () => fetch('https://ser-ver-v.vercel.app/addedbook')
        },
        {
            path: '/comment',
            element: <PrivateRoute><Comment></Comment></PrivateRoute>,
            loader: () => fetch('https://ser-ver-v.vercel.app/commens')
        }
        ]
    },

]);

