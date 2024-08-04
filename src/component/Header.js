import { useState } from "react";

const Header = () =>{
    const [loginbtn,setloginbtn]=useState("Login");
    return(
        <div className="header-container">
            <div className="logo-container">
                <img className="logo-img" src="https://tse4.mm.bing.net/th?id=OIP.ueHppfRf52CDn841Rpj8IwHaHa&pid=Api&P=0&h=220"></img>
            </div>
            <div className="header-list">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About US</li>
                    <li>Cart</li>
                </ul>
            </div>
            <button className="btn" onClick={()=>{
                loginbtn==="Login"
                 ?setloginbtn("Logout")
                 :setloginbtn("Login");
            }}>{loginbtn}</button>
            
        </div>
    );
};
export default Header;