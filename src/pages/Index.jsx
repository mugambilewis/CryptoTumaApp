import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Navbar from '../components/NavBar';


const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      
    </div>
  );
};

export default Index;