const CardHolder= (props) =>{
    const {name,cuisines,avgRating,costForTwo}=props?.info;
    return(
        <div className="card-holder">
            <div className="card-holderr">
            <img className="card-holder-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.info.cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rating: {avgRating}</h4>
            <h4>{costForTwo}</h4>
            </div>
        </div>
    );
};
export default CardHolder;