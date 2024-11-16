export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-orange-800">
          Mission Roadmap
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="relative pl-8 border-l-4 border-orange-500">
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[10px]"></div>
              <h3 className="text-2xl font-bold mb-4 text-orange-800">Phase 1: Launch</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Token Creation and Fair Launch</li>
                <li>• Website and Social Media Launch</li>
                <li>• Community Building</li>
                <li>• Initial Marketing Push</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-4 border-orange-400">
              <div className="absolute w-4 h-4 bg-orange-400 rounded-full -left-[10px]"></div>
              <h3 className="text-2xl font-bold mb-4 text-orange-800">Phase 2: Growth</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• CoinGecko & CoinMarketCap Listings</li>
                <li>• Community Expansion</li>
                <li>• Major Marketing Campaigns</li>
                <li>• Partnership Announcements</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-4 border-orange-300">
              <div className="absolute w-4 h-4 bg-orange-300 rounded-full -left-[10px]"></div>
              <h3 className="text-2xl font-bold mb-4 text-orange-800">Phase 3: Expansion</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• CEX Listings</li>
                <li>• NFT Collection Launch</li>
                <li>• Staking Platform</li>
                <li>• Mobile App Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}