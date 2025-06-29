import Image from "next/image";
import { Button } from "./ui/button";

const LandingSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-background/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary leading-tight mb-4">
 Dr. Nikhil Barnawal
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Compassionate Care, Modern Medicine.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[450px] lg:w-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl transform rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105">
              <Image
                src="https://i.ibb.co/LDg97ZmN/Whats-App-Image-2025-06-29-at-13-37-47.jpg"
                alt="Portrait of Dr. Jane Doe"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                data-ai-hint="doctor portrait"
                priority
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
