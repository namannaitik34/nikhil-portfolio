import Header from '@/components/header';
import Footer from '@/components/footer';
import LandingSection from '@/components/landing-section';
import AboutSection from '@/components/about-section';
import ProjectsSection from '@/components/projects-section';
import TestimonialsSection from '@/components/testimonials-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <LandingSection />
        <AboutSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
