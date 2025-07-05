const WhyChoose = () => {
  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast Transfers",
      description: "Average transaction time under 30 seconds. Our advanced routing technology finds the fastest path for your crypto transfers."
    },
    {
      icon: "🔒", 
      title: "Military-Grade Security",
      description: "Multi-signature wallets, cold storage, and 256-bit encryption protect your assets. Your security is our top priority."
    },
    {
      icon: "💰",
      title: "Lowest Fees Guaranteed", 
      description: "Pay as little as 0.1% in fees. We beat traditional exchanges by up to 80% on transfer costs."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Send crypto to over 190 countries. Available 24/7 with support in 15+ languages worldwide."
    },
    {
      icon: "📱",
      title: "User-Friendly Interface",
      description: "Intuitive design that works for beginners and pros alike. No technical knowledge required to get started."
    },
    {
      icon: "🎯",
      title: "Real-Time Tracking",
      description: "Monitor your transfers in real-time with detailed transaction history and instant notifications."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-yellow-500">CryptoTuma</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join over 2 million users who trust CryptoTuma for secure, fast, and affordable cryptocurrency transfers. 
            Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/10">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "2M+", label: "Active Users" },
            { number: "$50B+", label: "Volume Transferred" },
            { number: "1000+", label: "Cryptocurrencies" },
            { number: "99.9%", label: "Uptime" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;