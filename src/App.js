import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Content from "./components/Content";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
