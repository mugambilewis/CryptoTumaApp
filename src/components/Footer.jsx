import { Bitcoin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: ["Send Crypto", "Receive Crypto", "Exchange Rates", "API Documentation", "Mobile App"]
    },
    {
      title: "Support", 
      links: ["Help Center", "Contact Support", "Transaction Status", "Security Center", "Bug Bounty"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press Kit", "Blog", "Partnerships"]
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "AML Policy", "Compliance"]
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Bitcoin className="w-8 h-8 text-yellow-500 mr-3" />
              <span className="text-2xl font-bold text-white">
                Crypto<span className="text-yellow-500">Tuma</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The world's most trusted cryptocurrency transfer platform. Send over 1,000 
              cryptocurrencies instantly with the lowest fees and highest security standards.
            </p>
            <div className="flex space-x-4">
              {["📧", "🐦", "📘", "📱", "💬"].map((social, index) => (
                <a key={index} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300">
                  <span className="text-lg">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest crypto news, market updates, and platform announcements delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
              />
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-6 py-3 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 CryptoTuma. All rights reserved. | Licensed Money Service Business
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-gray-400 text-sm">Secured by</span>
            <div className="flex space-x-4">
              {["🔒", "🛡️", "✅"].map((icon, index) => (
                <span key={index} className="text-xl">{icon}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
