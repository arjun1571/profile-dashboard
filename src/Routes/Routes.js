import {createBrowserRouter,} from "react-router-dom";
import Main from "../LayOut/Main";
import Password from "../Page/PassWord/Password";
import Notification from "../Page/Notification/Notification";


export const routes =  createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element: <Password></Password>
            },
            {
                path:"/password",
                element: <Password></Password>
            },
            {
                path:"/notification",
                element: <Notification></Notification>
            }
        ]
    
    },
])