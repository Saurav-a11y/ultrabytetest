import "./App.css";

import { BannerSection } from "./Components/BannerSection/BannerSection";
import { BlogSection } from "./Components/BlogSection/BlogSection";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { Layout } from "./Components/Layout/Layout";
import { MidBanner } from "./Components/MidBanner/MidBanner";

function App() {
  return (
    <div className="App">
      <Layout>
        <BannerSection />
        <BlogSection />
        <MidBanner />
        <Contact />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
