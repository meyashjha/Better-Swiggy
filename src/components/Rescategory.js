import Menuitems from "./Menuitems";

const Rescategory = ({ data, showitems, setshowindex }) => {
    const handleClick = () => {
        setshowindex();
    }
    
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 p-4 bg-stone-100 dark:bg-gray-800 rounded-xl shadow-sm border border-stone-200 dark:border-gray-700 transition-colors duration-300">
                <div className="flex justify-between text-gray-800 dark:text-gray-200">
                    <span className="font-extrabold ">{data.title} ({data.itemCards.length})</span>
                    <span onClick={handleClick} className="cursor-pointer">🔽</span>
                </div>
                {showitems && <Menuitems items={data.itemCards} />}
            </div>
        </div>
    )
}

export default Rescategory;