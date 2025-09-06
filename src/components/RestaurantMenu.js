import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResmenu from "../utils/useResmenu";
import Rescategory from "./Rescategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const params = useParams();
    const resData = useResmenu(params.resid);
    const [showindex, setshowindex] = useState();

    if(resData === null) return <Shimmer/>;

    const resinfo = resData?.data?.cards?.[2]?.card?.card?.info;
    const Categories = resData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    if(!resinfo) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resinfo;

    return (
        <div className="text-center min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <h1 className="font-bold text-2xl mt-2">{name}</h1>
            <h1 className="font-semibold text-lg text-gray-600 dark:text-gray-400">{cuisines.join(", ")} - {costForTwoMessage}</h1>
            {Categories.map((c, index) => 
                <Rescategory 
                    key={c?.card?.card?.title} 
                    data={c?.card?.card}
                    showitems={index === showindex && true} 
                    setshowindex={() => setshowindex(index === showindex ? null : index)} 
                />
            )}
        </div>
    )
}

export default RestaurantMenu;