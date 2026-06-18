import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import Portfolio from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Portfolio />
      <WhyChooseUs />
      <ContactForm />
    </>
  );
}
