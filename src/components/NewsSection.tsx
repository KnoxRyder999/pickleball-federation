import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Bell } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "New Tournament Rules for 2024 Season",
      excerpt: "Important updates to official tournament regulations, including new scoring systems and court specifications that all players should know.",
      category: "Rules",
      date: "2 hours ago",
      featured: true,
      delay: "0.2s"
    },
    {
      title: "Registration Open for National Championship",
      excerpt: "The biggest tournament of the year is now accepting registrations. Early bird pricing available until March 1st.",
      category: "Tournament",
      date: "1 day ago",
      featured: false,
      delay: "0.4s"
    },
    {
      title: "New Certified Courts Added in Texas",
      excerpt: "15 new courts have been certified and added to our reservation system across Dallas, Houston, and Austin metropolitan areas.",
      category: "Infrastructure",
      date: "3 days ago",
      featured: false,
      delay: "0.6s"
    },
    {
      title: "Coach Certification Program Updates",
      excerpt: "New online modules available for Level 2 certification. Enhanced curriculum includes advanced strategy and player development.",
      category: "Education",
      date: "5 days ago",
      featured: false,
      delay: "0.8s"
    },
    {
      title: "Junior Development League Launch",
      excerpt: "Exciting new youth program launching in 10 states, focusing on skill development and sportsmanship for players under 18.",
      category: "Youth",
      date: "1 week ago",
      featured: false,
      delay: "1s"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Rules": "bg-red-100 text-red-800",
      "Tournament": "bg-blue-100 text-blue-800",
      "Infrastructure": "bg-green-100 text-green-800",
      "Education": "bg-purple-100 text-purple-800",
      "Youth": "bg-orange-100 text-orange-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="news" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Latest News &
            <span className="text-primary"> Announcements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Stay updated with the latest developments, rule changes, and exciting news from the federation
          </p>
        </div>

        {/* Featured Article */}
        <Card className="mb-12 overflow-hidden shadow-elegant hover:shadow-glow transition-smooth animate-scale-in">
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-span-2 p-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge className={getCategoryColor(news[0].category)}>
                  {news[0].category}
                </Badge>
                <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                  <Bell className="w-3 h-3 mr-1" />
                  FEATURED
                </Badge>
              </div>
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-3xl mb-3">{news[0].title}</CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {news[0].date}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg text-muted-foreground mb-6">
                  {news[0].excerpt}
                </p>
                <Button variant="hero" size="lg">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-12 w-12 text-primary" />
                </div>
                <p className="text-sm font-medium">Important Update</p>
              </div>
            </div>
          </div>
        </Card>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {news.slice(1).map((article, index) => (
            <Card 
              key={index} 
              className={`shadow-card hover:shadow-elegant transition-smooth hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-fade-in-up`}
              style={{ animationDelay: article.delay }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getCategoryColor(article.category)} variant="secondary">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.date}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-smooth">
                  Read more
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-smooth" />
                </div>
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
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;