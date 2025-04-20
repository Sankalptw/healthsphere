
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/home/Hero';
import CitySelection from '@/components/home/CitySelection';
import FeaturedDoctors from '@/components/home/FeaturedDoctors';
import AboutSection from '@/components/home/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CitySelection />
        <FeaturedDoctors />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
