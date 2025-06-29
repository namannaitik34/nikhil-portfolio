import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Clinical Study on Pediatric Asthma",
    description: "A comprehensive study on the efficacy of new inhalation techniques for pediatric asthma patients.",
    image: "https://i.ibb.co/8471xNhm/Child-with-inhalationmask-small-shutterstock-133702643.jpg",
    aiHint: "medical research",
    link: "#",
  },
  {
    title: "Case Study: Rare Autoimmune Disorder",
    description: "Detailed analysis and treatment protocol for a patient with an uncommon autoimmune condition.",
    image: "https://i.ibb.co/ZjH2Rrn/Long-Covid-Surveys-png.webp",
    aiHint: "patient chart",
    link: "#",
  },
  {
    title: "Community Health Initiative",
    description: "Led a local initiative to promote preventive health screenings and wellness education.",
    image: "https://i.ibb.co/1YTMQYdq/photo-001.jpg",
    aiHint: "community health",
    link: "#",
  },
   {
    title: "Telemedicine Implementation Analysis",
    description: "Research on the impact of telemedicine on patient accessibility and satisfaction during the pandemic.",
    image: "https://i.ibb.co/TqcHk7kt/Telemedicine.jpg",
    aiHint: "telemedicine doctor",
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 text-primary">
          Work & Research
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border/50">
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={project.aiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription className="pt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 text-primary">
                  <a href={project.link}>Read More &rarr;</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
