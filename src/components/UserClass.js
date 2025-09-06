import React  from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count:0,
            count2:1,
            userinfo:{}
        };

        console.log("Child Constructor Called")
    }

    async componentDidMount(){

        const response = await fetch("https://api.github.com/users/meyashjha")
        const json = await response.json();
        console.log(json);
        this.setState({userinfo:json})

        
    }

    render(){
        const {name, location, avatar_url } = this.state.userinfo;
        console.log(this.state.userinfo);
        console.log("Child Render Called")
        return (
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
                <div className="text-center">
                    {/* Avatar */}
                    <div className="relative mb-6">
                        <img 
                            src={avatar_url || "https://via.placeholder.com/120"} 
                            alt={name}
                            className="w-24 h-24 rounded-full mx-auto border-4 border-orange-200 shadow-lg"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
                    </div>

                    {/* User Info */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{name || "Loading..."}</h2>
                    <p className="text-gray-600 mb-4 flex items-center justify-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {location || "India"}
                    </p>

                    {/* Role/Description */}
                    <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 mb-6">
                        <p className="text-orange-800 font-medium">Full Stack Developer</p>
                        <p className="text-sm text-orange-600 mt-1">Building amazing food delivery experiences</p>
                    </div>

                    {/* Counter Section */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Profile Views</h3>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-600">{this.state.count}</div>
                                <div className="text-sm text-gray-500">Views</div>
                            </div>
                            <button 
                                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                                onClick={()=>{
                                    this.setState({
                                        count: this.state.count + 1
                                    })
                                }}
                            >
                                👀 View Profile
                            </button>
                        </div>
                    </div>

                    {/* Skills/Badges */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">React</span>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Node.js</span>
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">JavaScript</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">Food Tech</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserClass;