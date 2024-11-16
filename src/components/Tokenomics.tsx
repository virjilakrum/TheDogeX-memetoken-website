import { PieChart, Percent, Lock } from 'lucide-react';

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-orange-800">
          Tokenomics
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-orange-800">Supply & Distribution</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Supply:</span>
                <span className="font-bold">1,000,000,000,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Circulating Supply:</span>
                <span className="font-bold">950,000,000,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Burned:</span>
                <span className="font-bold">50,000,000,000</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-orange-800">Transaction Tax</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Liquidity Pool:</span>
                <span className="font-bold">3%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Marketing:</span>
                <span className="font-bold">2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Burn:</span>
                <span className="font-bold">1%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}