import Rescard from "./Rescard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResdata from "../utils/useResdata";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [reslist, setreslist] = useState([]);
    const [filteredlist, setfilteredlist] = useState([]);
    const [isTopRatedActive, setIsTopRatedActive] = useState(false);

    const[searchtext, setsearchtext] = useState("");

    const finaldata = useResdata();
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
    if (finaldata) {
        setreslist(finaldata);
        setfilteredlist(finaldata);
    }
    }, [finaldata]);

    const handleTopRatedFilter = () => {
        if (!isTopRatedActive) {
            const UpdatedList = reslist.filter(res => res.info.avgRating > 4.2);
            setfilteredlist(UpdatedList);
            setIsTopRatedActive(true);
        } else {
            setfilteredlist(reslist);
            setIsTopRatedActive(false);
        }
    };
    
    if(reslist.length === 0){
        return(<Shimmer/>)
    }
    if (!onlineStatus) {
        return(
            <h1>You are offline. Please check your internet connection.</h1>
        )
    }
        return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-orange-600 dark:from-gray-900 dark:via-gray-800 dark:to-orange-700 text-white py-16 px-4 transition-colors duration-300">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-orange-200 dark:from-gray-100 dark:to-orange-300 bg-clip-text text-transparent">
                        Delicious Food Delivered
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 dark:text-gray-300 mb-8 font-medium">
                        Order from the best restaurants in your city
                    </p>
                    
                    {/* Search Section */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
                        <div className="relative flex-1 w-full">
                            <input 
                                className="w-full py-4 px-6 text-gray-800 dark:text-gray-200 border-0 rounded-full focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-500 shadow-xl text-lg placeholder-gray-400 dark:placeholder-gray-500 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm transition-colors duration-300" 
                                type="text" 
                                value={searchtext} 
                                onChange={(e) => setsearchtext(e.target.value)} 
                                placeholder="Search for restaurants, cuisines..." 
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-6">
                                <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                        <button 
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105" 
                            onClick={() => {
                                const searchlist = reslist.filter((res) => 
                                    res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                                ); 
                                setfilteredlist(searchlist)
                            }}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Filter Section */}
            <div className="py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center mb-8">
                        <button
                            className={`font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                                isTopRatedActive 
                                    ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white'
                                    : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white'
                            }`}
                            onClick={handleTopRatedFilter}
                        >
                            {isTopRatedActive ? 'Top Rated Restaurants ✖' : 'Top Rated Restaurants'}
                        </button>
                    </div>

                    {/* Results count */}
                    <div className="text-center mb-6">
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            Found <span className="font-semibold text-orange-600 dark:text-orange-400">{filteredlist.length}</span> restaurants
                            {isTopRatedActive && <span className="text-sm text-gray-500 dark:text-gray-500 ml-2">(showing top rated only)</span>}
                        </p>
                    </div>

                    {/* Restaurant Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredlist.map((restaurant) => {
                            return (
                                <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                                    <Rescard resdata={restaurant} />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;




