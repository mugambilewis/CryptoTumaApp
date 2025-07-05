import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Navbar from '../components/NavBar';
import SupportedCoins from '../components/SupportedCoins';
import Testimonials from '../components/Testimonials';
import WhyChoose from '../components/WhyChoose';
import Footer from '../components/Footer';


const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <HowItWorks />
			<SupportedCoins />
			<WhyChoose />
			<Testimonials />
      <Footer />
    </div>
  );
};

export default Index;