import { useDispatch, useSelector } from "react-redux";
import { addItems, incrementItem, decrementItem } from "../utils/cartSlice";

const Menuitems = ({ items }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const getQuantity = (id) => {
        const item = cartItems.find(i => i.id === id);
        return item ? item.quantity : 0;
    };

    return (
        <div className="space-y-6">
            {items.map((i) => {
                const id = i.card.info.id;
                const quantity = getQuantity(id);
                const info = i.card.info;
                
                return (
                    <div key={id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                        <div className="p-6">
                            <div className="flex flex-col lg:flex-row justify-between gap-6">
                                {/* Item Details */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-bold text-xl text-gray-800 mb-2">{info.name}</h3>
                                        {info.isVeg !== undefined && (
                                            <div className={`flex-shrink-0 w-5 h-5 border-2 ${info.isVeg ? 'border-green-500' : 'border-red-500'} flex items-center justify-center`}>
                                                <div className={`w-2 h-2 rounded-full ${info.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="text-2xl font-bold text-orange-600">
                                            ₹{info.price ? (info.price)/100 : (info.defaultPrice)/100}
                                        </span>
                                        {info.price && info.defaultPrice && info.price < info.defaultPrice && (
                                            <span className="text-gray-500 line-through text-lg">
                                                ₹{info.defaultPrice/100}
                                            </span>
                                        )}
                                        {info.ribbon && (
                                            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
                                                {info.ribbon.text}
                                            </span>
                                        )}
                                    </div>

                                    {info.ratings && info.ratings.aggregatedRating && (
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex items-center bg-green-100 px-2 py-1 rounded">
                                                <span className="text-green-700 font-semibold text-sm">
                                                    ⭐ {info.ratings.aggregatedRating.rating}
                                                </span>
                                                <span className="text-green-600 text-xs ml-1">
                                                    ({info.ratings.aggregatedRating.ratingCountV2})
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {info.description && (
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {info.description}
                                        </p>
                                    )}

                                    {info.itemAttribute && info.itemAttribute.spiceLevel && (
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm text-gray-600">Spice Level:</span>
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, index) => (
                                                    <span 
                                                        key={index} 
                                                        className={`text-sm ${index < info.itemAttribute.spiceLevel ? 'text-red-500' : 'text-gray-300'}`}
                                                    >
                                                        🌶️
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Add to Cart Section */}
                                <div className="flex flex-col items-end justify-between min-w-[200px]">
                                    {/* Item Image if available */}
                                    {info.imageId && (
                                        <div className="w-32 h-24 rounded-xl overflow-hidden mb-4 shadow-md">
                                            <img 
                                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${info.imageId}`}
                                                alt={info.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}

                                    {/* Quantity Controls */}
                                    <div className="w-full">
                                        {quantity === 0 ? (
                                            <button 
                                                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                                onClick={() => dispatch(addItems(info))}
                                            >
                                                Add to Cart
                                            </button>
                                        ) : (
                                            <div className="flex items-center justify-center bg-gray-50 rounded-xl p-2">
                                                <button 
                                                    className="bg-white text-orange-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg hover:bg-orange-50 transition-colors duration-200 shadow-sm" 
                                                    onClick={() => dispatch(decrementItem(id))}
                                                >
                                                    -
                                                </button>
                                                <span className="font-bold text-lg px-4 min-w-[60px] text-center text-gray-800">
                                                    {quantity}
                                                </span>
                                                <button 
                                                    className="bg-white text-orange-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg hover:bg-orange-50 transition-colors duration-200 shadow-sm" 
                                                    onClick={() => dispatch(incrementItem(id))}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        )}
                                        
                                        {quantity > 0 && (
                                            <div className="text-center mt-2">
                                                <span className="text-sm text-gray-600">
                                                    Total: ₹{((info.price ? info.price : info.defaultPrice) * quantity / 100).toFixed(2)}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Bottom border with subtle gradient */}
                        <div className="h-1 bg-gradient-to-r from-orange-200 via-red-200 to-orange-200"></div>
                    </div>
                );
            })}
        </div>
    );
};

export default Menuitems;