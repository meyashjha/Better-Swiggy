import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return(
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <div className="text-center p-8">
                <h1 className="text-5xl font-extrabold mb-4">Oops</h1>
                <p className="text-xl">
                    {err.status} : {err.statusText}
                </p>
            </div>
        </div>
    )
}

export default Error;