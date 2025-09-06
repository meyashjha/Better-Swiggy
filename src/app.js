import ReactDom from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import "./style.css";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import { DarkModeProvider } from "./utils/darkModeContext";

const App = () => {
    return (
        <div className="app">
            <DarkModeProvider>
                <Provider store={appStore}>
                    <Header/>
                    <Outlet/>
                </Provider>
            </DarkModeProvider>
        </div>
    )
}

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:resid",
                element: <RestaurantMenu/>
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    }
])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>)