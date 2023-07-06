import {createBrowserRouter,} from "react-router-dom";
import Main from "../LayOut/Main";
import Password from "../Page/PassWord/Password";
import Notification from "../Page/Notification/Notification";
import ResetPass from "../Page/ResetPass/ResetPass";


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
            ,
            {
                path:"/resetpassword",
                element: <ResetPass></ResetPass>
            }
        ]
    
    },
])