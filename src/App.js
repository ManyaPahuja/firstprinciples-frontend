import './App.css';
import CallToAction from './Components/CallToAction';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Pricing from './Components/Pricing';
import Service from './Components/Service';
import Testimonial from './Components/Testimonial';

function App() {
  return (
    <>
      <Header />
      <Service />
      <Pricing />
      <CallToAction />
      <Testimonial />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
