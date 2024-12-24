import Stories from "./Stories";
import Approach from "./Approach";
import Banner from "./Banner";
import BannerExtra from "./BannerExtra";
import BookConsultation from "./BookConsultation";
import Consultation from "./Consultation";
import Discover from "./Discover";
import Experts from "./Experts";

const Home = () => {
  return (
    <div>
      <Banner />
      <BannerExtra />
      <Discover />
      <Consultation />
      <BookConsultation />
      <Approach />
      <Stories />
      <Experts />
    </div>
  );
};

export default Home;
