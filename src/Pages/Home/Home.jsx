import Approach from "./Approach";
import Banner from "./Banner";
import BannerExtra from "./BannerExtra";
import BookConsultation from "./BookConsultation";
import Consultation from "./Consultation";
import Discover from "./Discover";

const Home = () => {
  return (
    <div>
      <Banner />
      <BannerExtra />
      <Discover />
      <Consultation />
      <BookConsultation />
      <Approach />
    </div>
  );
};

export default Home;
