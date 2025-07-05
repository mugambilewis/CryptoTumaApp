const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "DeFi Trader",
      image: "👩‍💼",
      quote: "CryptoTuma has revolutionized how I move crypto between exchanges. The speed is incredible and the fees are unbeatable. I've saved thousands in transfer costs this year alone.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Crypto Investor", 
      image: "👨‍💻",
      quote: "Finally, a platform that makes crypto transfers simple. I can send Bitcoin to my family overseas in seconds, not hours. The peace of mind knowing it's secure is priceless.",
      rating: 5
    },
    {
      name: "Elena Volkov",
      role: "Blockchain Developer",
      image: "👩‍🔬", 
      quote: "The technical infrastructure behind CryptoTuma is impressive. Multi-chain support, real-time tracking, and bulletproof security. This is the future of crypto transfers.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by <span className="text-yellow-500">Millions</span> Worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. See what our community of crypto enthusiasts, 
            traders, and investors say about CryptoTuma.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-white text-lg">{testimonial.name}</div>
                  <div className="text-yellow-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Trusted & Secure</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🛡️", label: "SOC 2 Compliant" },
                { icon: "🔐", label: "Multi-Sig Security" },
                { icon: "📋", label: "Regulatory Compliant" },
                { icon: "✅", label: "Audited Smart Contracts" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-gray-300 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;