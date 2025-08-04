import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Trophy, 
  MapPin, 
  CreditCard, 
  Building, 
  GraduationCap, 
  ShoppingBag,
  Star
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "National Player Registry",
      description: "Complete player database with skill ratings and tournament history",
      delay: "0.1s",
      direction: "fade-in-left"
    },
    {
      icon: Trophy,
      title: "Tournament Management",
      description: "End-to-end tournament organization and bracket management system",
      delay: "0.2s",
      direction: "fade-in-up"
    },
    {
      icon: MapPin,
      title: "Court Reservation",
      description: "Find and book courts at certified facilities nationwide",
      delay: "0.3s",
      direction: "fade-in-right"
    },
    {
      icon: CreditCard,
      title: "Digital Credentials",
      description: "Official digital player cards and certification badges",
      delay: "0.4s",
      direction: "fade-in-left"
    },
    {
      icon: Building,
      title: "Club Management",
      description: "Complete club administration and member management tools",
      delay: "0.5s",
      direction: "fade-in-up"
    },
    {
      icon: GraduationCap,
      title: "Certification Programs",
      description: "Professional coach and referee training and certification",
      delay: "0.6s",
      direction: "fade-in-right"
    },
    {
      icon: ShoppingBag,
      title: "Official Store",
      description: "Certified equipment and official federation merchandise",
      delay: "0.7s",
      direction: "fade-in-left"
    },
    {
      icon: Star,
      title: "Rankings System",
      description: "Live national and regional player rankings updated in real-time",
      delay: "0.8s",
      direction: "fade-in-up"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Comprehensive Platform
            <span className="block text-primary">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Everything you need to participate, compete, and excel in the world of pickleball,
            all in one unified platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group shadow-card hover:shadow-elegant transition-smooth hover:scale-105 hover:-translate-y-2 animate-${feature.direction}`}
              style={{ animationDelay: feature.delay }}
            >
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-smooth" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="cta" 
            size="xl" 
            className="animate-bounce-in"
            style={{ animationDelay: "1s" }}
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;