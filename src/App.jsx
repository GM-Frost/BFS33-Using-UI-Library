import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import "./global.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Cards />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
