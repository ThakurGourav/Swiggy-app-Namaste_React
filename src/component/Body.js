import FoodList from "./util/FoodList";
import CardHolder from "./CardHolder";
import { useState } from "react";
import React from "react";
const Body = () =>{

    const [ListOfRest,setListOfRest]=useState(FoodList);
      return(
          <div className="body-conatiner">
              <div className="search-bar-body">
                <button onClick={()=>{
                  let a=FoodList.filter((res)=>res.info.avgRating>4);
                  setListOfRest(a);
                }}>Top Rated Rest</button>
              </div>
              <div className="cards">
                  {ListOfRest.map((CardHolder))}
              </div>
  
          </div>
      );
  };
  export default Body;