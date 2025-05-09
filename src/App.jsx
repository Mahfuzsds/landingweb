import "./app.css";
import Companies from "./components/Companies";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Service";
import Testimonial from "./components/Testimonial";
import Trial from "./components/Trial";
import TrustSection from "./components/TrustSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Services />
      <TrustSection />
      <Testimonial />
      <Pricing />
      <FAQ />
      <Trial />
      <Footer />
    </>
  );
}

export default App;
