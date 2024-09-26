function Navbar() {
    return (
      <nav className="bg-yellow-500 text-black text-sm uppercase tracking-wider">
        <div className="hidden md:flex container mx-auto justify-center items-center">
          <ul className="flex space-x-6 py-2">
            <li className="hover:text-gray-800 cursor-pointer font-bold">All Categories</li>
            <li className="hover:text-gray-800 cursor-pointer">Today Deals</li>
            <li className="hover:text-gray-800 cursor-pointer font-bold">Electronics</li>
            <li className="hover:text-gray-800 cursor-pointer font-bold">Clothings</li>
            <li className="hover:text-gray-800 cursor-pointer font-bold">Computers</li>
            <li className="hover:text-gray-800 cursor-pointer font-bold">Furnitures</li>
            <li className="hover:text-gray-800 cursor-pointer font-bold">Mom & Baby</li>
            <li className="hover:text-gray-800 cursor-pointer font-bold">Books & More</li>
          </ul>
        </div>
  
        <div className="md:hidden flex justify-center items-center py-2">
          <span className="font-bold text-lg">Menu</span>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  