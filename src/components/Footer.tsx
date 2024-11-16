import { Twitter, MessageCircle, MessagesSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-orange-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TrumpsFight</h3>
            <p className="text-orange-200">
              Join us on our mission to Mars! The most ambitious meme token in the galaxy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-orange-200 hover:text-white transition">About</a></li>
              <li><a href="#how-to-buy" className="text-orange-200 hover:text-white transition">How to Buy</a></li>
              <li><a href="#tokenomics" className="text-orange-200 hover:text-white transition">Tokenomics</a></li>
              <li><a href="#roadmap" className="text-orange-200 hover:text-white transition">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Community</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-200 hover:text-white transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-orange-200 hover:text-white transition">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="#" className="text-orange-200 hover:text-white transition">
                <MessagesSquare className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-orange-800 text-center text-orange-200">
          <p>© 2024 TrumpsFight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}