import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import WhyGrolec from "@/components/WhyGrolec";
import EnquiryForm from "@/components/EnquiryForm";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <Stats />
      <WhyGrolec />
      <Projects />
      <Testimonials />
      <EnquiryForm />
    </>
  );
}
