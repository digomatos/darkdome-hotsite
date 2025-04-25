export const metadata = {
  title: "Home - Stellar",
  description: "Page description",
};

import Hero from "@/components/hero";
import Clients from "@/components/clients";
import Features from "@/components/features";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Faqs from "@/components/faqs";
import FeaturesDD02 from "@/components/featuresdd-02";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <FeaturesDD02 />
      <TestimonialsCarousel />
      <Faqs />
    </>
  );
}
