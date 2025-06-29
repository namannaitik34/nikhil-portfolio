import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Camera } from "lucide-react";

const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-20 lg:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 text-primary">
          Hobbies & Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <div className="mx-auto bg-accent/20 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Plane className="w-8 h-8" />
              </div>
              <CardTitle className="font-headline text-2xl">Travel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Exploring new cultures and landscapes, which broadens my perspective and enriches my understanding of the human experience.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <div className="mx-auto bg-accent/20 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Camera className="w-8 h-8" />
              </div>
              <CardTitle className="font-headline text-2xl">Photography</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Capturing moments in time, from candid portraits to stunning landscapes. It's a creative outlet that hones my observation skills.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
