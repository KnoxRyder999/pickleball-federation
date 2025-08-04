import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import tournamentImage from "@/assets/tournament-scene.jpg";

const TournamentsSection = () => {
  const tournaments = [
    {
      title: "National Championship 2024",
      date: "March 15-17, 2024",
      location: "Phoenix, Arizona",
      level: "Pro/Open",
      participants: "500+",
      prize: "$50,000",
      status: "Open",
      featured: true,
      delay: "0.2s"
    },
    {
      title: "Regional Spring Classic",
      date: "April 8-9, 2024",
      location: "Denver, Colorado",
      level: "3.0-5.0",
      participants: "300+",
      prize: "$15,000",
      status: "Open",
      featured: false,
      delay: "0.4s"
    },
    {
      title: "Masters Cup Tournament",
      date: "May 20-21, 2024",
      location: "Austin, Texas",
      level: "50+ Age",
      participants: "200+",
      prize: "$10,000",
      status: "Registration Soon",
      featured: false,
      delay: "0.6s"
    },
    {
      title: "Youth Development Cup",
      date: "June 5-6, 2024",
      location: "Orlando, Florida",
      level: "Under 18",
      participants: "150+",
      prize: "Scholarships",
      status: "Open",
      featured: false,
      delay: "0.8s"
    }
  ];

  return (
    <section id="tournaments" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Upcoming
            <span className="text-primary"> Tournaments</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Compete at the highest level in officially sanctioned tournaments across the nation
          </p>
        </div>

        {/* Featured Tournament */}
        <div className="mb-12">
          <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-smooth animate-scale-in">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={tournamentImage} 
                  alt="Tournament scene" 
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground font-bold">
                  FEATURED
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-3xl mb-2">{tournaments[0].title}</CardTitle>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {tournaments[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {tournaments[0].location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{tournaments[0].participants}</div>
                      <div className="text-sm text-muted-foreground">Participants</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">{tournaments[0].prize}</div>
                      <div className="text-sm text-muted-foreground">Prize Pool</div>
                    </div>
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    <Trophy className="mr-2" />
                    Register Now
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Tournament Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tournaments.slice(1).map((tournament, index) => (
            <Card 
              key={index} 
              className={`shadow-card hover:shadow-elegant transition-smooth hover:scale-105 hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: tournament.delay }}
            >
              <CardHeader>
                <CardTitle className="text-xl mb-2">{tournament.title}</CardTitle>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {tournament.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {tournament.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {tournament.level}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="font-semibold text-primary">{tournament.participants}</div>
                    <div className="text-xs text-muted-foreground">Expected</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-secondary">{tournament.prize}</div>
                    <div className="text-xs text-muted-foreground">Prize Pool</div>
                  </div>
                </div>
                <Button 
                  variant={tournament.status === "Open" ? "default" : "outline"} 
                  className="w-full"
                  disabled={tournament.status !== "Open"}
                >
                  {tournament.status === "Open" ? "Register" : tournament.status}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="accent" 
            size="lg" 
            className="animate-bounce-in"
            style={{ animationDelay: "1.2s" }}
          >
            View All Tournaments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;