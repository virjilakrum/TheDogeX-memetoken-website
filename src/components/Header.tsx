import { Rocket, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8" />
            <span className="text-2xl font-bold">TrumpsFight</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-orange-200 transition">About</a>
            <a href="#how-to-buy" className="hover:text-orange-200 transition">How to Buy</a>
            <a href="#tokenomics" className="hover:text-orange-200 transition">Tokenomics</a>
            <a href="#roadmap" className="hover:text-orange-200 transition">Roadmap</a>
          </div>

          <button className="hidden md:block bg-orange-500 hover:bg-orange-400 px-6 py-2 rounded-full font-bold transition">
            Buy Now
          </button>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block hover:text-orange-200 transition">About</a>
            <a href="#how-to-buy" className="block hover:text-orange-200 transition">How to Buy</a>
            <a href="#tokenomics" className="block hover:text-orange-200 transition">Tokenomics</a>
            <a href="#roadmap" className="block hover:text-orange-200 transition">Roadmap</a>
            <button className="w-full bg-orange-500 hover:bg-orange-400 px-6 py-2 rounded-full font-bold transition">
              Buy Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}