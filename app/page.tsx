import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import ClientsSphere from "@/components/ClientsCarousel";
import ContactSection from "@/components/Contactus";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="technologies">
        <Technologies />
      </section>
      <section id="works">
        <PortfolioCarousel />
      </section>
      <section id="clients">
        <ClientsSphere />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
