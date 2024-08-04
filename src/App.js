import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import Body from "./component/Body";

const App = () =>{
    return(
        <div className="App">
            <Header/>
            <Body/>
        </div>
);
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);