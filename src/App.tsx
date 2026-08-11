import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactFab } from './components/ContactFab';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { HairServices, SkinServices } from './sections/Services';
import { Doctors } from './sections/Doctors';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { TreatmentProcess } from './sections/TreatmentProcess';
import { Gallery } from './sections/Gallery';
import { BeforeAfter } from './sections/BeforeAfter';
import { ValetParking } from './sections/ValetParking';
import { Testimonials } from './sections/Testimonials';
import { Statistics } from './sections/Statistics';
import { FAQ } from './sections/FAQ';
import { Blogs } from './sections/Blogs';
import { Contact } from './sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HairServices />
        <SkinServices />
        <Doctors />
        <WhyChooseUs />
        <TreatmentProcess />
        <Gallery />
        <BeforeAfter />
        <ValetParking />
        <Testimonials />
        <Statistics />
        <FAQ />
        <Blogs />
        <Contact />
      </main>
      <Footer />
      <ContactFab />
    </>
  );
}
