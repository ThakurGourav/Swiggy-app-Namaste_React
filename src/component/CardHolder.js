const CardHolder= (props) =>{
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData?.info;
    return(
        <div className="flex flex-wrap  m-2 p-4 w-[200px] h-[450px] bg-slate-50 rounded-md">
            <div className="">
            
            <img className="w-[180px] h-[180px] object-center rounded-md bg-red-200" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img> 
          {/*} <img className="w-[180px] h-[180px] object-center rounded-md bg-red-200"></img>
            */}
            <h3 className="my-1 font-bold text-lg">{name}</h3>
            <h4 className="my-1">{cuisines.join(", ")}</h4>
            <h4 className="my-1">Rating: {avgRating}</h4>
            <h4 className="my-1">{costForTwo}</h4>
            </div>
        </div>
    );
};
export const withPromoted = (CardHolder) => {
    return (props)=> {
      <div>
          <h3>Promoted</h3>
      </div>
    };
  };
export default CardHolder;