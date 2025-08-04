import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp, Medal, Star, Users } from "lucide-react";
import doublesAction from "@/assets/doubles-action.jpg";

const RankingsSection = () => {
  const topPlayers = [
    {
      rank: 1,
      name: "Sarah Johnson",
      location: "California",
      rating: "5.0",
      points: "2,850",
      change: "+2",
      trending: "up",
      avatar: "/placeholder.svg",
      delay: "0.2s"
    },
    {
      rank: 2,
      name: "Mike Rodriguez",
      location: "Texas",
      rating: "5.0",
      points: "2,780",
      change: "0",
      trending: "same",
      avatar: "/placeholder.svg",
      delay: "0.4s"
    },
    {
      rank: 3,
      name: "Emily Chen",
      location: "Florida",
      rating: "4.9",
      points: "2,720",
      change: "+1",
      trending: "up",
      avatar: "/placeholder.svg",
      delay: "0.6s"
    },
    {
      rank: 4,
      name: "David Thompson",
      location: "Arizona",
      rating: "4.9",
      points: "2,650",
      change: "-1",
      trending: "down",
      avatar: "/placeholder.svg",
      delay: "0.8s"
    },
    {
      rank: 5,
      name: "Jessica Martinez",
      location: "Colorado",
      rating: "4.8",
      points: "2,580",
      change: "+3",
      trending: "up",
      avatar: "/placeholder.svg",
      delay: "1s"
    }
  ];

  const getTrendingIcon = (trending: string) => {
    switch (trending) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "down":
        return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />;
      default:
        return <span className="h-4 w-4 text-gray-400">-</span>;
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return <Medal className="h-5 w-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />;
    if (rank === 3) return <Medal className="h-5 w-5 text-amber-600" />;
    return <span className="font-bold text-lg">#{rank}</span>;
  };

  return (
    <section id="rankings" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Rankings List */}
          <div className="animate-fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Live National
              <span className="text-primary"> Rankings</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
              See where you stand among the nation's top players. Rankings are updated in real-time 
              after every tournament and match.
            </p>

            <div className="space-y-4 mb-8">
              {topPlayers.map((player, index) => (
                <Card 
                  key={index} 
                  className={`shadow-card hover:shadow-elegant transition-smooth hover:scale-105 animate-fade-in-up`}
                  style={{ animationDelay: player.delay }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10">
                          {getRankBadge(player.rank)}
                        </div>
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={player.avatar} />
                          <AvatarFallback>{player.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-lg">{player.name}</div>
                          <div className="text-sm text-muted-foreground">{player.location}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <Badge variant="outline" className="mb-1">
                            {player.rating}
                          </Badge>
                          <div className="text-xs text-muted-foreground">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-lg">{player.points}</div>
                          <div className="text-xs text-muted-foreground">Points</div>
                        </div>
                        <div className="flex items-center gap-1">
                          {getTrendingIcon(player.trending)}
                          <span className={`text-sm ${
                            player.trending === 'up' ? 'text-green-500' : 
                            player.trending === 'down' ? 'text-red-500' : 'text-gray-400'
                          }`}>
                            {player.change}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="animate-scale-in"
              style={{ animationDelay: "1.2s" }}
            >
              <Star className="mr-2" />
              View Full Rankings
            </Button>
          </div>

          {/* Image and Stats */}
          <div className="animate-fade-in-right">
            <div className="relative">
              <img 
                src={doublesAction} 
                alt="Players in action" 
                className="rounded-2xl shadow-elegant hover:shadow-glow transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl" />
              
              {/* Floating stats */}
              <Card className="absolute -top-6 -right-6 bg-white shadow-card animate-bounce-in" style={{ animationDelay: "1.4s" }}>
                <CardContent className="p-4 text-center">
                  <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">50,000+</div>
                  <div className="text-xs text-muted-foreground">Ranked Players</div>
                </CardContent>
              </Card>
              
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-card animate-bounce-in" style={{ animationDelay: "1.6s" }}>
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">Live</div>
                  <div className="text-xs text-muted-foreground">Real-time Updates</div>
                </CardContent>
              </Card>
            </div>

            {/* Additional info cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="text-center p-4 shadow-card animate-scale-in" style={{ animationDelay: "1.8s" }}>
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-accent mb-1">12</div>
                  <div className="text-sm text-muted-foreground">Skill Levels</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 shadow-card animate-scale-in" style={{ animationDelay: "2s" }}>
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">State Rankings</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingsSection;