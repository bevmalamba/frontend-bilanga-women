import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen ">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Content */}
      <div className="relative h-screen flex items-center justify-center text-center bg-[url('https://res.cloudinary.com/dgyhsam48/image/upload/v1734085064/b1wwqec1s1ljq1pdglg5.png')] bg-cover bg-center top-20 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            BILANGA WOMAN 
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
          est une entreprise agricole qui apporte des solutions innovantes conçues pour répondre aux besoins modernes dans le secteur agricole . Elle offre une expérience unique, alliant performance, simplicité et efficacité, pour accompagner ses utilisateurs au quotidien.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Découvrir
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
