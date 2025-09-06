import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem, removeItem, clearItems } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const total = cartItems.reduce((sum, i) => sum + (i.price ? i.price : i.defaultPrice) * i.quantity, 0) / 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 py-8 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        🛒 My Cart
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                    </p>
                </div>

                {cartItems.length === 0 ? (
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 text-center transition-colors duration-300">
                        <div className="mb-6">
                            <svg className="w-24 h-24 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-2">Your cart is empty</h2>
                            <p className="text-gray-500 dark:text-gray-500">Looks like you haven't added anything to your cart yet</p>
                        </div>
                        <button 
                            onClick={() => window.history.back()}
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map((i) => (
                                <div key={i.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                        <div className="flex-1">
                                            <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2">{i.name}</h3>
                                            <div className="flex items-center gap-4">
                                                <span className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                                                    ₹{(i.price ? i.price : i.defaultPrice) / 100}
                                                </span>
                                                <span className="text-sm text-gray-500 dark:text-gray-500">per item</span>
                                            </div>
                                            {i.description && (
                                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-2">{i.description}</p>
                                            )}
                                        </div>
                                        
                                        <div className="flex flex-col sm:flex-row items-center gap-4">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center bg-gray-50 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300">
                                                <button 
                                                    className="bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg hover:bg-orange-50 dark:hover:bg-orange-900 transition-colors duration-200 shadow-sm" 
                                                    onClick={() => dispatch(decrementItem(i.id))}
                                                >
                                                    -
                                                </button>
                                                <span className="font-bold text-lg px-4 min-w-[60px] text-center text-gray-800 dark:text-gray-200">{i.quantity}</span>
                                                <button 
                                                    className="bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg hover:bg-orange-50 dark:hover:bg-orange-900 transition-colors duration-200 shadow-sm" 
                                                    onClick={() => dispatch(incrementItem(i.id))}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            {/* Item Total */}
                                            <div className="text-right">
                                                <div className="font-bold text-lg text-gray-800 dark:text-gray-200">
                                                    ₹{((i.price ? i.price : i.defaultPrice) * i.quantity / 100).toFixed(2)}
                                                </div>
                                                <button 
                                                    className="text-red-500 hover:text-red-700 dark:hover:text-red-400 text-sm font-medium mt-1 hover:underline transition-colors duration-200" 
                                                    onClick={() => dispatch(removeItem(i.id))}
                                                >
                                                    🗑️ Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-8 transition-colors duration-300">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Order Summary</h2>
                                
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Subtotal ({cartItems.reduce((sum, i) => sum + i.quantity, 0)} items)</span>
                                        <span>₹{total.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Delivery Fee</span>
                                        <span className="text-green-600 dark:text-green-400">FREE</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Taxes & Fees</span>
                                        <span>₹{(total * 0.18).toFixed(2)}</span>
                                    </div>
                                    <hr className="border-gray-200 dark:border-gray-600" />
                                    <div className="flex justify-between text-xl font-bold text-gray-800 dark:text-gray-200">
                                        <span>Total</span>
                                        <span>₹{(total + total * 0.18).toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                        Proceed to Checkout
                                    </button>
                                    <button 
                                        className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-6 rounded-xl transition-all duration-300" 
                                        onClick={() => dispatch(clearItems())}
                                    >
                                        Clear Cart
                                    </button>
                                </div>

                                {/* Savings Badge */}
                                <div className="mt-6 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl p-4 transition-colors duration-300">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-green-800 dark:text-green-300 font-medium text-sm">
                                            You're saving ₹49 on delivery!
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;