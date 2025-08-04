import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Target, Users } from "lucide-react";
import victoryImage from "@/assets/victory-celebration.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Official Governance",
      description: "Ensuring fair play and standardized rules across all competitions",
      delay: "0.2s"
    },
    {
      icon: Award,
      title: "Player Ranking System",
      description: "Comprehensive national and regional ranking system for all skill levels",
      delay: "0.4s"
    },
    {
      icon: Target,
      title: "Certification Programs",
      description: "Professional coach and referee certification programs",
      delay: "0.6s"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connecting players, clubs, and communities nationwide",
      delay: "0.8s"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About the 
              <span className="text-primary"> Federation</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
              The Official Pickleball Federation is the governing body responsible for promoting, 
              developing, and standardizing pickleball across the nation. We unite players, clubs, 
              and communities under one official platform.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="shadow-card hover:shadow-elegant transition-smooth hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: feature.delay }}
                >
                  <CardContent className="p-6">
                    <feature.icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="animate-scale-in"
              style={{ animationDelay: "1s" }}
            >
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="animate-fade-in-right">
            <div className="relative">
              <img 
                src={victoryImage} 
                alt="Victory celebration" 
                className="rounded-2xl shadow-elegant hover:shadow-glow transition-smooth hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              
              {/* Floating stat cards */}
              <Card className="absolute -top-6 -left-6 bg-white shadow-card animate-bounce-in" style={{ animationDelay: "1.2s" }}>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Player Satisfaction</div>
                </CardContent>
              </Card>
              
              <Card className="absolute -bottom-6 -right-6 bg-white shadow-card animate-bounce-in" style={{ animationDelay: "1.4s" }}>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-xs text-muted-foreground">Support Available</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;