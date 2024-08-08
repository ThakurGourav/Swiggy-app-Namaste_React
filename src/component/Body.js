import CardHolder from "./CardHolder";
import { useState, useEffect } from "react";
import React from "react";
import about from "./about";


const Body = () => {
    // const restaurantCardPromoted=withPromoted(CardHolder);
    const [ListOfRest, setListOfRest] = useState([]);
    const [SearchText,setSearchText]=useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData= async ()=>{
        const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=22.71700&lng=75.83370");
        const json=await data.json();
        console.log(json);
       setListOfRest(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
        
    };
    if(ListOfRest.length==0){
        return
        console.log("fuck");
    }

    
    return (
        <div className="">
            <div className="flex ">
            <div className="m-4">
                <button className="bg-green-100 rounded-lg px-4 py-1" onClick={() => {
                    let a = ListOfRest.filter((res) => res.info.avgRating > 4);
                    setListOfRest(a);
                }}>Top Rated Restraunts</button>
            </div>
            <div className="m-4 ">
                <input  type="text" className="border border-solid-black rounded-lg px-2 py-1" value={SearchText} onChange={(e)=>
                    setSearchText(e.target.value)}></input>
                <button className="px-4 bg-green-100 mx-4 rounded-lg py-1" onClick={()=>{
                    const searchRest=ListOfRest.filter((res)=>res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
                    setListOfRest(searchRest);
                }}>Search</button>
            </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {ListOfRest.map((res)=>
                    <CardHolder key={res.info.id} resData={res}/>
                )
                };
            </div>

        </div>
    );
};
export default Body;