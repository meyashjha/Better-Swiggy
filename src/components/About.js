import React, { useState, useEffect } from "react";

const About = () => {
    const [githubData, setGithubData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Replace 'your-github-username' with your actual GitHub username
    const GITHUB_USERNAME = "meyashjha"; // Change this to your GitHub username

    useEffect(() => {
        fetchGithubData();
    }, []);

    const fetchGithubData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
            if (!response.ok) {
                throw new Error('Failed to fetch GitHub data');
            }
            const data = await response.json();
            setGithubData(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            console.error('GitHub API Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return(
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-gray-800 dark:to-orange-700 text-white py-20 transition-colors duration-300">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Me</h1>
                        <p className="text-xl md:text-2xl text-orange-100 dark:text-gray-300 leading-relaxed">
                            Passionate developer creating amazing React applications.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Personal Story Section */}
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">My Journey</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                                Hello! I'm a passionate full-stack developer with a love for creating exceptional user experiences. 
                                This food delivery application represents my journey in learning React, Redux, and modern web development. 
                                I believe that great technology should make people's lives easier and more enjoyable.
                            </p>
                            <div className="flex justify-center">
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-md transition-colors duration-300">{loading ? (
                                        // Loading state
                                        <div className="animate-pulse">
                                            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
                                            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                                            <div className="flex justify-center space-x-4">
                                                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                            </div>
                                        </div>
                                    ) : error ? (
                                        // Error state
                                        <div className="text-center">
                                            <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                                <span className="text-2xl font-bold text-white">YS</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Yash</h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-4">Full Stack Developer</p>
                                            <p className="text-red-500 text-sm mb-4">GitHub data unavailable</p>
                                            <button 
                                                onClick={fetchGithubData}
                                                className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm font-medium"
                                            >
                                                Retry
                                            </button>
                                        </div>
                                    ) : githubData ? (
                                        // Success state with GitHub data
                                        <div className="text-center">
                                            <img 
                                                src={githubData.avatar_url} 
                                                alt={githubData.name || githubData.login}
                                                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gradient-to-r from-orange-500 to-red-500 shadow-lg"
                                            />
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                                {githubData.name || githubData.login}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-2">
                                                {githubData.bio || "Full Stack Developer"}
                                            </p>
                                            <div className="flex justify-center items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-500">
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    </svg>
                                                    {githubData.location || "India"}
                                                </div>
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {githubData.company || "Freelancer"}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                                                <div>
                                                    <div className="font-bold text-lg text-gray-800 dark:text-gray-200">{githubData.public_repos}</div>
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Repos</div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-lg text-gray-800 dark:text-gray-200">{githubData.followers}</div>
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-lg text-gray-800 dark:text-gray-200">{githubData.following}</div>
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Following</div>
                                                </div>
                                            </div>
                                            <div className="flex justify-center space-x-4">
                                                {githubData.blog && (
                                                    <a 
                                                        href={githubData.blog.startsWith('http') ? githubData.blog : `https://${githubData.blog}`}
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                                                    >
                                                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 0V3m0 9h9m-9 0l3-3m-3 3l-3-3" />
                                                        </svg>
                                                    </a>
                                                )}
                                                <a 
                                                    href={githubData.html_url}
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-100 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                                                >
                                                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                    </svg>
                                                </a>
                                                {githubData.twitter_username && (
                                                    <a 
                                                        href={`https://twitter.com/${githubData.twitter_username}`}
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                                                    >
                                                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        {/* Skills & Technologies Section */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-12">Technologies I Work With</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">React</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">React.js</h3>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">Redux</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Redux</h3>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-green-600 dark:text-green-400 font-bold text-lg">Node</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Node.js</h3>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">JS</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">JavaScript</h3>
                                </div>
                            </div>
                        </div>

                        {/* Project Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                            <div className="text-center">
                                <div className="bg-orange-100 dark:bg-orange-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                                    {githubData && new Date().getFullYear() - new Date(githubData.created_at).getFullYear() || "2+"}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">Years on GitHub</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-red-100 dark:bg-red-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                                    {githubData?.public_repos || "10+"}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">Public Repos</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-green-100 dark:bg-green-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                                    {githubData?.followers || "50+"}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">Followers</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Passionate</h3>
                                <p className="text-gray-600 dark:text-gray-400">Developer</p>
                            </div>
                        </div>

                        {/* Mission Statement */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 text-center transition-colors duration-300">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">My Mission</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
                                "To create beautiful, functional, and user-friendly applications that solve real-world problems. 
                                Every line of code I write is an opportunity to make someone's day a little bit better. 
                                This food delivery app is just the beginning of my journey to build technology that matters."
                            </p>
                            <div className="mt-8">
                                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                    Let's Connect
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default About;