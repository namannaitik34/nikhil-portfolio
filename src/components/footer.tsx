import { Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-headline">Dr. Nikhil Barnawal</h3>
            <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} nikhil.com. All Rights Reserved.</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
              <a href="mailto:jane.doe@medifolio.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
