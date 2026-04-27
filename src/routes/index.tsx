import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "عمر السالم | محاسب قانوني معتمد - خدمات محاسبية واستشارات مالية" },
      {
        name: "description",
        content: "محاسب قانوني معتمد بخبرة +15 سنة. خدمات محاسبية، إقرارات ضريبية، مراجعة حسابات، واستشارات مالية احترافية للشركات في السعودية والخليج.",
      },
      { property: "og:title", content: "عمر السالم | محاسب قانوني معتمد" },
      { property: "og:description", content: "حلول محاسبية دقيقة وموثوقة لأعمالك" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
