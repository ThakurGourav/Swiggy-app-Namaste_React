import { useState } from "react";
import { Link } from "react-router-dom";
import checkStatus from "./util/checkStatus";
import checkStatus from "./util/checkStatus";

const Header = () => {
    const [loginbtn, setloginbtn] = useState("Login");
    const checkStatuss = checkStatus();
    return (
        <div className="flex justify-between px-4 bg-pink-50 shadow-md">
            <div className="w-20 ">
                <img className="logo-img" src="https://png.pngtree.com/png-clipart/20230520/original/pngtree-burger-logo-png-image_9166715.png"></img>
            </div>
            <div className="flex align-middle item">
                <ul className="flex">
                    <li className="m-4"><Link to="/">Home</Link></li>
                    <li className="m-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="m-4">Contact Us</li>
                    <li className="m-4">Cart</li>
                    <li className="m-4">
                        Status: {checkStatuss ? "🟢" : "🔴"}
                    </li>
                </ul>
            </div>
            

        </div>
    );
};
export default Header;