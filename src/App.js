import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/about";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Restro from "./component/Restro";

const App = () =>{
    return(
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
);
};
const AppRouter=createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/restaurants/:id",
                element:<Restro/>
            }
        ],
        errorElement:<Error/>
    },
    
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);