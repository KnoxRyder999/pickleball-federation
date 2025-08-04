import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Tournaments", href: "#tournaments" },
    { label: "Rankings", href: "#rankings" },
    { label: "Find Courts", href: "#" },
    { label: "Certification", href: "#" },
    { label: "News", href: "#news" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Tournament Rules", href: "#" },
    { label: "Code of Conduct", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand and Contact */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 text-primary-glow">
              Pickleball Federation
            </h3>
            <p className="text-background/80 mb-6">
              The official governing body for pickleball, connecting players, 
              clubs, and communities nationwide.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="text-sm">(555) 123-PICK</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span className="text-sm">info@pickleballfed.org</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary-glow" />
                <span className="text-sm">Phoenix, AZ 85001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-primary-glow transition-smooth hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h4 className="text-lg font-semibold mb-4">Legal & Rules</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-primary-glow transition-smooth hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <Button variant="outline" size="sm" className="bg-transparent border-primary-glow text-primary-glow hover:bg-primary-glow hover:text-foreground">
                Admin Login
              </Button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-background/80 mb-4 text-sm">
              Get the latest news, tournament updates, and rule changes delivered to your inbox.
            </p>
            
            <div className="flex gap-2 mb-6">
              <Input 
                placeholder="Your email address" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="outline" className="bg-primary-glow text-foreground border-primary-glow hover:bg-primary-glow/80">
                Subscribe
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary-glow hover:scale-110 transition-smooth"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="text-background/80 text-sm">
            © 2024 Official Pickleball Federation. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-background/80 text-sm">
            Made with 
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            for the pickleball community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;