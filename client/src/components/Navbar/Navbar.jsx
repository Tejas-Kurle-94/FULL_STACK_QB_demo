import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md fixed z-50 w-full top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-gray-800">
                            Logo
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-4">
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/createpost"
                            className="bg-emerald-500 text-white hover:bg-emerald-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Create Post
                        </Link>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;