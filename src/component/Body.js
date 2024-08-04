import CardHolder from "./CardHolder";
import { useState, useEffect } from "react";
import React from "react";
const Body = () => {
    const [ListOfRest, setListOfRest] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData= async ()=>{
        const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=22.71700&lng=75.83370");
        const json=await data.json();
        console.log(json);
       setListOfRest(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
        
    };
    if(ListOfRest.length==0){
        return
        console.log("fuck");
    }

    
    return (
        <div className="body-conatiner">
            <div className="search-bar-body">
                <button onClick={() => {
                    let a = ListOfRest.filter((res) => res.info.avgRating > 4);
                    setListOfRest(a);
                }}>Top Rated Rest</button>
            </div>
            <div className="search-btn">
                <input className="Search-restro" placeholder="Search Restro" onClick={()=>{
                    return(
                        
                    )
                }}></input>
            </div>
            <div className="cards">
                {ListOfRest.map((CardHolder))}
            </div>

        </div>
    );
};
export default Body;