import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Stethoscope, HeartPulse } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 text-primary">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto text-center text-lg text-foreground/80 mb-16">
          <p>
            A passionate and dedicated medical intern with a strong foundation in clinical practice and patient care. My journey in medicine is driven by a desire to make a tangible difference in people's lives through empathy, evidence-based practice, and continuous learning.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <div className="mx-auto bg-accent/20 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8" />
              </div>
              <CardTitle className="font-headline text-2xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold">Doctor of Medicine (MD)</p>
              <p className="text-muted-foreground">University of Health Sciences, 2023</p>
              <p className="mt-2 font-bold">B.Sc. in Biological Sciences</p>
              <p className="text-muted-foreground">State University, 2019</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <div className="mx-auto bg-accent/20 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Stethoscope className="w-8 h-8" />
              </div>
              <CardTitle className="font-headline text-2xl">Internship</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold">General Hospital Downtown</p>
              <p className="text-muted-foreground">Rotations in Internal Medicine, Pediatrics, Surgery, and OB/GYN.</p>
              <p className="mt-2">2023 - Present</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <div className="mx-auto bg-accent/20 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <HeartPulse className="w-8 h-8" />
              </div>
              <CardTitle className="font-headline text-2xl">Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide compassionate, patient-centered care. I believe in building trust and fostering open communication to achieve the best health outcomes for every individual.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
