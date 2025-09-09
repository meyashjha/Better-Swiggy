import { useEffect, useState } from "react";

function extractRestaurants(json) {
    const cards = json?.data?.cards ?? [];
    for (const c of cards) {
        const nested1 = c?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (Array.isArray(nested1)) return nested1;
        const nested2 = c?.card?.gridElements?.infoWithStyle?.restaurants;
        if (Array.isArray(nested2)) return nested2;
        const nested3 = c?.gridElements?.infoWithStyle?.restaurants;
        if (Array.isArray(nested3)) return nested3;
    }
    return [];
}

const useResdata = () => {
    const [finaldata, setfinaldata] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const fetchdata = async () => {
            try {
                const resp = await fetch(
                    "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                );
                const jsondata = await resp.json();
                const restaurants = extractRestaurants(jsondata);
                if (isMounted) setfinaldata(restaurants);
            } catch (e) {
                if (isMounted) setfinaldata([]);
            }
        };
        fetchdata();
        return () => {
            isMounted = false;
        };
    }, []);

    return finaldata;
};

export default useResdata;
