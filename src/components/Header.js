import { LOGO_URL } from "../utils/constants";  
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from 'react-redux';
import { useDarkMode } from "../utils/darkModeContext";

const Header = () => {
    const [btnname, setbtnname] = useState("Login")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items)
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const menuRef = useRef(null);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    useEffect(() => {
        if (!isMobileMenuOpen) return;
        const onDocClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('click', onDocClick);
        return () => document.removeEventListener('click', onDocClick);
    }, [isMobileMenuOpen]);

    return (
                <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-orange-100 dark:border-gray-700 transition-colors duration-300">
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center h-10 md:h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img 
                                id="logo" 
                                src={LOGO_URL} 
                                alt="Swiggy Logo"
                                className="h-7 w-auto md:h-12 hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                    </div>

                    {/* Navigation */}
                                        <nav className="hidden md:flex items-center space-x-8" aria-label="Primary">
                        <ul className="flex items-center space-x-6">
                            <li className="flex items-center">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Status: 
                                    <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        onlineStatus 
                                            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                                            : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                                    }`}>
                                        {onlineStatus ? '🟢 Online' : '🔴 Offline'}
                                    </span>
                                </span>
                            </li>
                            
                            <li>
                                <Link 
                                    to="/" 
                                    className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-200 flex items-center space-x-1"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span>Home</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link 
                                    to="/about" 
                                    className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-200 flex items-center space-x-1"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>About Us</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link 
                                    to="/contact" 
                                    className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-200 flex items-center space-x-1"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>Contact Us</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link 
                                    to="/cart" 
                                    className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-200 flex items-center space-x-1 relative"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L15 18M9 18h6" />
                                    </svg>
                                    <span>Cart</span>
                                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartItems.length}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        
                        {/* Dark Mode Toggle */}
                        <button 
                            onClick={toggleDarkMode}
                            type="button"
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {isDarkMode ? (
                                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                        
                        <button 
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                            type="button"
                            onClick={() => {
                                btnname === "Login" ? setbtnname("Logout") : setbtnname("Login")
                            }}
                        >
                            {btnname}
                        </button>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-1 relative" ref={menuRef}>
                        <button 
                            onClick={toggleDarkMode}
                            type="button"
                            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                            className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                            {isDarkMode ? (
                                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                        
                        <button 
                            type="button"
                            className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 focus:outline-none"
                            aria-label="Open menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setIsMobileMenuOpen(v => !v)}
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {isMobileMenuOpen && (
                            <div id="mobile-menu" className="absolute right-0 top-full mt-2 w-44 rounded-lg border border-orange-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black/5 z-50">
                                <nav aria-label="Mobile" className="py-1">
                                    <Link to="/" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-800 rounded">Home</Link>
                                    <Link to="/about" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-800 rounded">About Us</Link>
                                    <Link to="/contact" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-800 rounded">Contact Us</Link>
                                    <Link to="/cart" onClick={closeMobileMenu} className="flex items-center justify-between px-3 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-800 rounded">
                                        <span>Cart</span>
                                        <span className="ml-2 inline-flex items-center justify-center bg-orange-500 text-white text-[10px] rounded-full h-4 w-4">{cartItems.length}</span>
                                    </Link>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
    </header>
    )
}

export default Header;
                        
