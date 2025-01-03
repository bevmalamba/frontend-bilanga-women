
import { ShoppingCart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-green-600 font-bold text-xl"><img className='p-20' src="https://res.cloudinary.com/dgyhsam48/image/upload/v1734430062/cdx1co4imyojglyund5j.png" alt="" /></a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
              <Link to="/services" className="text-gray-600 hover:text-green-600">Services</Link>
              <Link to="/projets" className="text-gray-600 hover:text-green-600">Projets</Link>
              <Link to="/shop" className="text-gray-600 hover:text-green-600">Shop</Link>
              <Link to="/contact" className="text-gray-600 hover:text-green-600">Contact</Link>
              <Link to="/formulaire" className="text-gray-600 hover:text-green-600">Formulaire</Link>
         </div>
          <div className='md:lg:hidden w-1 '>
          <a href="/" className="text-gray-600 hover:text-green-600">Home</a>
            <a href="/services" className="text-gray-600 hover:text-green-600">Services</a>
            <a href="/projets" className="text-gray-600 hover:text-green-600">Projets</a>
            <a href="/shop" className="text-gray-600 hover:text-green-600">Shop</a>
            <a href="/contact" className="text-gray-600 hover:text-green-600">Contact</a>
            <a href="/formulaire" className="text-gray-600 hover:text-green-600">Formulaire</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-green-600">
              <Search size={20} />
            </button>
            <button className="text-gray-600 hover:text-green-600">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;