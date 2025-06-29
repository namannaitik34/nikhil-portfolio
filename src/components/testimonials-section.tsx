import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Jane is one of the most dedicated and compassionate interns I've had the pleasure to work with. Her clinical skills are matched only by her empathy for patients.",
    name: "Dr. Robert Chen",
    title: "Attending Physician, General Hospital",
  },
  {
    quote: "An exceptional team player and a quick learner. Jane consistently goes above and beyond, showing great promise as a future leader in medicine.",
    name: "Dr. Emily Rodriguez",
    title: "Pediatrics Department Head",
  },
  {
    quote: "Her attention to detail and commitment to evidence-based practice are truly commendable. Patients are always in excellent hands with her.",
    name: "Dr. Samuel Jones",
    title: "Chief Surgical Resident",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 text-primary">
          What My Colleagues Say
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <Quote className="w-12 h-12 text-accent mb-4" />
                      <p className="text-lg italic text-foreground/90 mb-6">
                        "{testimonial.quote}"
                      </p>
                      <p className="font-bold text-primary font-headline text-xl">{testimonial.name}</p>
                      <p className="text-muted-foreground">{testimonial.title}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
