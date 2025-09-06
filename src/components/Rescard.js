import { PIC_URL } from "../utils/constants";

const Rescard = (props) => {
    const {resdata} =  props;
    const {cloudinaryImageId, cuisines, name, costForTwo, avgRating, id} = resdata?.info;

   return ( 
       <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700">
           {/* Image Container */}
           <div className="relative overflow-hidden">
               <img 
                   id="resimg" 
                   src={PIC_URL + cloudinaryImageId}
                   alt={name}
                   className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
               />
               <div className="absolute top-3 right-3">
                   <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                       avgRating >= 4.0 
                           ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                           : avgRating >= 3.5 
                           ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                           : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                   }`}>
                       ⭐ {avgRating}
                   </div>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
           </div>

           {/* Content */}
           <div className="p-4 space-y-2">
               <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 line-clamp-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200">
                   {name}
               </h4>
               
               <div className="flex items-center justify-between">
                   <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">
                       {costForTwo}
                   </span>
                   <div className="flex items-center space-x-1">
                       <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                       <span className="text-gray-500 dark:text-gray-400 text-sm">30-40 min</span>
                   </div>
               </div>
               
               <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                   {cuisines.join(", ")}
               </p>
               
               <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                   <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-1">
                           <svg className="w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                           </svg>
                           <span className="text-green-600 dark:text-green-400 text-xs font-medium">Available</span>
                       </div>
                       <button className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm font-medium">
                           View Menu →
                       </button>
                   </div>
               </div>
           </div>
       </div>
   )
}

export default Rescard;