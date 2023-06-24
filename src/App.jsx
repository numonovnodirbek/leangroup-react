import "./App.scss";
import BackTop from "./components/backTop/BackTop";
import Comands from "./components/comands/Comands";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Information from "./components/information/Information";
import Leangroup from "./components/leangroup/Leangroup";
import News from "./components/news/News";
import Patalog from "./components/patalog/Patalog";
import Sertifikat from "./components/sertifikat/Sertifikat";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Leangroup />
        <Sertifikat />
        <Patalog />
        <Information />
        <Comands />
        <News />
      </main>
      <Footer />
      <BackTop />
    </div>
  );
}

export default App;
