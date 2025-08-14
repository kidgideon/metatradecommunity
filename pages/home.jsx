import "../styles/home.css"
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Advantages from "../components/advantages";
import CryptoSpotlight from "../components/cryptospotlight";
import Features from "../components/features";
import Trust from "../components/trust";
import SlideStocks from "../components/slidestock";
import AboutTrading from "./abouttrading";
import Partnerships from "./partner";
import CommunityImpact from "../components/community";
import EducationHub from "../components/education";
import VisionStatement from "../components/vison";
import Etf from "../components/etf";

const Home = () => {

  return (
    <div className="home-page-container">
      <NavBar />
      <Hero/>
      <div style={{margin: "30px 0px", width: "100%"}}>
  <SlideStocks/>
      </div>
      <CommunityImpact/>
      <CryptoSpotlight/>
      <Features/>
      <EducationHub/>
      <Trust/>
      <VisionStatement/>
      <div style={{width: "95%", margin: "20px 0px"}} >
<Etf/>
      </div>
      
      <Advantages/>
       <AboutTrading/>
        <Partnerships/>
      <Footer />
    </div>
  );
};

export default Home;
