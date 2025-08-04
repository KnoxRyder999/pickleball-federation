import { Button } from "@/components/ui/button";
import { Play, Trophy, Users, Calendar } from "lucide-react";
import heroAction from "@/assets/hero-action.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroAction})` }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Official Pickleball
            <span className="block bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent animate-pulse-glow">
              Federation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            The Official Platform for Pickleball Excellence
          </p>
          
          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Join thousands of players, compete in official tournaments, and be part of the fastest-growing sport in the nation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="xl" 
              className="animate-bounce-in hover:animate-pulse-glow"
              style={{ animationDelay: "0.6s" }}
            >
              <Users className="mr-2" />
              Register as Player
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 animate-bounce-in"
              style={{ animationDelay: "0.8s" }}
            >
              <Trophy className="mr-2" />
              Join as Club
            </Button>
            <Button 
              variant="accent" 
              size="xl" 
              className="animate-bounce-in"
              style={{ animationDelay: "1s" }}
            >
              <Calendar className="mr-2" />
              Explore Tournaments
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: "50K+", label: "Registered Players", delay: "1.2s" },
              { number: "1,200+", label: "Active Clubs", delay: "1.4s" },
              { number: "800+", label: "Tournaments", delay: "1.6s" },
              { number: "50+", label: "States", delay: "1.8s" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">
                  {stat.number}
                </div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "4s" }} />
    </section>
  );
};

export default HeroSection;