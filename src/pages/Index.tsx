import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import TournamentsSection from "@/components/TournamentsSection";
import RankingsSection from "@/components/RankingsSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TournamentsSection />
      <RankingsSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
