
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[url('https://res.cloudinary.com/dgyhsam48/image/upload/v1734087002/svymikt0s9fpxfnp6o1k.png')] w-full bg-cover bg-center text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Description */}
        <div className="space-y-4">
          <img src="https://res.cloudinary.com/dgyhsam48/image/upload/v1734087261/xvqg9uofgjd7g05ipo3x.png" alt="Bilanga Woman" className="h-16 w-auto " />
          <p className="text-sm">
            Bilanga Woman est une entreprise agricole qui permet aux investisseurs d'investir avec beaucoup de sécurité
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Nos Projets */}
        <div>
          <h3 className="text-lg font-semibold mb-4">NOS PROJETS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400 transition-colors">Porcherie</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Maraîchère</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Poulaile</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Semence</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Caseaux</a></li>
          </ul>
        </div>

        {/* Nos Semences */}
        <div>
          <h3 className="text-lg font-semibold mb-4">NOS SEMENCES</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="https://res.cloudinary.com/dgyhsam48/image/upload/v1734518052/hxot8qheuakuddz2adyx.jpg" alt="Piment" className="w-12 h-12 object-cover rounded" />
              <div>
                <p>Piment</p>
                <p className="text-green-400">$10.99</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img src="https://images.unsplash.com/photo-1566383444833-43afb88e5dc9?auto=format&fit=crop&w=500&q=80" alt="Tomate" className="w-12 h-12 object-cover rounded" />
              <div>
                <p>Tomate</p>
                <p className="text-green-400">$11.99</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
          <div className="space-y-2">
            <p>Phone: +243817532436</p>
            <p>Email: bevmalamba@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-green-800 text-center text-sm">
        <p>© Copyright 2024, Bilanga Woman</p>
        <p className="mt-2">♡ by BevM</p>
      </div>
    </footer>
  );
};

export default Footer;