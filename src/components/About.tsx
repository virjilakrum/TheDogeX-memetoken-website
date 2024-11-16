import { Rocket, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-orange-800">
          Why Choose TrumpsFight?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-orange-800">Mars Mission</h3>
            <p className="text-gray-600">
              We're not just another meme token. We're building a community of space enthusiasts and crypto pioneers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-orange-800">Strong Community</h3>
            <p className="text-gray-600">
              Join thousands of holders who share the vision of making crypto fun and profitable.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-orange-800">Tokenomics</h3>
            <p className="text-gray-600">
              Fair launch, locked liquidity, and deflationary mechanics to ensure sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}