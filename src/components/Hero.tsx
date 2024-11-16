export default function Hero() {
  return (
    <section className="pt-24 pb-32 bg-gradient-to-b from-orange-600 to-orange-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              To Mars We Go! 🚀
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Join the most ambitious meme token in the galaxy. 
              We're not just going to the moon - we're headed straight to Mars!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-100 transition">
                Buy $FIGHT
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                Join Community
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&auto=format&fit=crop"
              alt="Doge Astronaut"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}