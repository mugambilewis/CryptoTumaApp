import { Bitcoin } from 'lucide-react';

const SupportedCoins = () => {
  const popularCoins = [
    { name: "Bitcoin", symbol: "BTC", icon: "₿", price: "$43,250" },
    { name: "Ethereum", symbol: "ETH", icon: "Ξ", price: "$2,650" },
    { name: "Tether", symbol: "USDT", icon: "₮", price: "$1.00" },
    { name: "BNB", symbol: "BNB", icon: "⬡", price: "$310" },
    { name: "Solana", symbol: "SOL", icon: "◎", price: "$65" }, 
    { name: "XRP", symbol: "XRP", icon: "✕", price: "$0.62" },
    { name: "Cardano", symbol: "ADA", icon: "₳", price: "$0.45" },
    { name: "Dogecoin", symbol: "DOGE", icon: "Ð", price: "$0.08" }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            1,000+ <span className="text-yellow-500">Cryptocurrencies</span> Supported
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transfer any cryptocurrency instantly. From major coins like Bitcoin and Ethereum 
            to the latest DeFi tokens and memecoins - we support them all.
          </p>
        </div>

        {/* Popular coins grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {popularCoins.map((coin, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-black rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
              <div className="text-center">
                <div className="text-3xl mb-3 text-yellow-500">{coin.icon}</div>
                <h3 className="font-bold text-white text-lg mb-1">{coin.symbol}</h3>
                <p className="text-gray-400 text-sm mb-2">{coin.name}</p>
                <p className="text-yellow-500 font-semibold">{coin.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional supported networks */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Multi-Chain Support</h3>
            <p className="text-gray-300 mb-6">
              Send across all major blockchain networks including Ethereum, Binance Smart Chain, 
              Polygon, Avalanche, Arbitrum, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Ethereum", "BSC", "Polygon", "Avalanche", "Arbitrum", "Optimism"].map((network) => (
                <span key={network} className="bg-yellow-500/20 text-yellow-500 px-4 py-2 rounded-full text-sm font-medium">
                  {network}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedCoins;
