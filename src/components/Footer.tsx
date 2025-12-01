import { Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={Logo} alt="Logo" className="w-28" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Celebrating and preserving the rich heritage of Indian art forms and the talented artists who bring them to life. Join us in unearthing the spirit of Indian culture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/artists" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Explore Artists
                </Link>
              </li>
              <li>
                <Link to="/art-forms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Art Forms
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link to="/contribute" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contribute
                </Link>
              </li>
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Art</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/artists" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Dance
                </Link>
              </li>
              <li>
                <Link to="/art-forms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Music
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Drama
                </Link>
              </li>
              <li>
                <Link to="/contribute" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Martial Art
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Connect With Us</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Mail size={18} className="text-primary" />
              <a href="mailto:hello@unearthify.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                hello@unearthify.com
              </a>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Unearthify. Preserving Indian art and culture with love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
