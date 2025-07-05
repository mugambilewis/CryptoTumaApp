import { ArrowDown, ArrowUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Create Your Account",
      description: "Sign up in under 2 minutes with just your email. No lengthy verification processes or complex KYC requirements.",
      icon: "👤"
    },
    {
      step: "02", 
      title: "Choose Your Crypto",
      description: "Select from over 1,000 supported cryptocurrencies including Bitcoin, Ethereum, USDT, and all major altcoins.",
      icon: "₿"
    },
    {
      step: "03",
      title: "Enter Recipient Details", 
      description: "Simply paste the recipient's wallet address or scan their QR code. Our system validates addresses automatically.",
      icon: "📱"
    },
    {
      step: "04",
      title: "Send Instantly",
      description: "Confirm your transaction and watch your crypto arrive in seconds. Real-time tracking included with every transfer.",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How <span className="text-yellow-500">CryptoTuma</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Send cryptocurrency globally in 4 simple steps. Our streamlined process makes crypto transfers 
            as easy as sending a text message.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
                <div className="text-6xl mb-4 text-center">{step.icon}</div>
                <div className="text-yellow-500 font-bold text-sm mb-2">STEP {step.step}</div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowDown className="w-6 h-6 text-yellow-500 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;