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
                className="max-w-xs size-56 rounded-full shadow-2xl"
              />
            </div>
            <div className="order-2 lg:order-1 flex flex-col gap-8">
              {/* grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 lg:gap-8 w-full lg:w-auto */}
              {Array(3)
                .fill()
                .map((_, idx) => (
                  <div
                    key={idx}
                    className={
                      idx === 1 ? "lg:-ml-6 lg:mr-6" : "lg:-mr-6 lg:ml-6"
                    }
                  >
                    <DiscoverCard />
                  </div>
                ))}
            </div>
            <div className="order-3 flex flex-col gap-8">
              {/* grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 lg:gap-8 w-full lg:w-auto */}
              {Array(3)
                .fill()
                .map((_, idx) => (
                  <div
                    key={idx}
                    className={
                      idx === 1 ? "lg:ml-6 lg:-mr-6" : "lg:mr-6 lg:-ml-6"
                    }
                  >
                    <DiscoverCard left={true} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
