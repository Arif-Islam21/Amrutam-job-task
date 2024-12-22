import DiscoverCard from "../../Components/DiscoverCard";
import SectionTitle from "../../Components/SectionTitle";

const Discover = () => {
  return (
    <div>
      <div className="container mx-auto">
        <SectionTitle
          title="Discover Ayurveda’s magic with us"
          description="Ayurvedic treatment aims to balance your body and mind, bringing harmony
        and vitality. It's like a journey to better health using ancient
        wisdom, a totally effective approach for a better life."
        />
        <div className="hero min-h-[70vh]">
          <div className="hero-content flex-col lg:flex-row">
            <div className="order-1 lg:order-2 mx-4">
              <img
                src="https://img.freepik.com/premium-photo/serene-meditation-nature-background_391229-18765.jpg?ga=GA1.1.481348862.1727083279&semt=ais_hybrid"
                className="max-w-xs rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-2 lg:order-1 flex flex-col gap-8">
              <DiscoverCard />
              <DiscoverCard />
              <DiscoverCard />
            </div>
            <div className="order-3 flex flex-col gap-8">
              <DiscoverCard />
              <DiscoverCard />
              <DiscoverCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
