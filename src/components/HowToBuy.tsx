import { Wallet, DollarSign, ArrowRightCircle } from 'lucide-react';

export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-orange-800">
          How to Join the Mission
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Get a Wallet</h3>
              <p className="text-gray-600">
                Download Phantom Wallet from the official website
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">2. Buy SOL</h3>
              <p className="text-gray-600">
                Purchase SOL from your preferred exchange
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRightCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">3. Swap for $FIGHT</h3>
              <p className="text-gray-600">
                Use Jupiter Exchange to swap SOL for $FIGHT
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition">
              Buy Now on Jupiter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}