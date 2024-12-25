import { TbHeartPlus } from "react-icons/tb";
import DiscoverCard from "../../Components/DiscoverCard";
import SectionTitle from "../../Components/SectionTitle";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { GiMeditation } from "react-icons/gi";
import { FaHandHoldingHand } from "react-icons/fa6";
import { GiMuscleUp } from "react-icons/gi";
import { BsCupFill } from "react-icons/bs";
import image from "../../assets/pictures/discoverMain.png";

const Discover = () => {
  const firstThree = [
    {
      name: "Personalized Wellness",
      description:
        "Get treatments made just for you based on your individual doshas ( body type)",
      icon: <TbHeartPlus size={40} />,
      textColor: "#6666ff",
      bgColor: "#EDF5FA",
    },
    {
      name: "Focus on prevention",
      description: "Stop problems even before they start.",
      icon: <FaHandsHoldingCircle size={40} />,
      textColor: "#4e7e4e",
      bgColor: "#EAF2EA",
    },
    {
      name: "Mind-Body Connection",
      description: "Keep your mind and body in sync for a happy life.",
      icon: <GiMeditation size={40} />,
      textColor: "#d22d2d",
      bgColor: "#FCF1F1",
    },
  ];
  const secondThree = [
    {
      name: "Holistic Healing",
      description: "Fix the root problem for long-lasting health.",
      icon: <FaHandHoldingHand size={40} />,
      textColor: "#4329a3",
      bgColor: "#F5F3FC",
    },
    {
      name: "Natural Remedies",
      description: "Using herbs and natural therapies for healing.",
      icon: <BsCupFill size={40} />,
      textColor: "#d97a0d",
      bgColor: "#FEF6ED",
    },
    {
      name: "Boosting immunity",
      description: "Stay strong and healthy for life, not just for today.",
      icon: <GiMuscleUp size={40} />,
      textColor: "#4e7e4e",
      bgColor: "#EAF2EA",
    },
  ];
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
                src={image}
                className="max-w-xs size-60 rounded-full shadow-2xl"
              />
            </div>
            <div className="order-2 lg:order-1 flex flex-col gap-8">
              {/* grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 lg:gap-8 w-full lg:w-auto */}
              {firstThree.map((item, idx) => (
                <div
                  key={idx}
                  className={
                    idx === 1 ? "lg:-ml-6 lg:mr-6" : "lg:-mr-6 lg:ml-6"
                  }
                >
                  <DiscoverCard
                    name={item.name}
                    description={item.description}
                    icon={item.icon}
                    textColor={item.textColor}
                    bgColor={item.bgColor}
                  />
                </div>
              ))}
            </div>
            <div className="order-3 flex flex-col gap-8">
              {/* grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 lg:gap-8 w-full lg:w-auto */}
              {secondThree.map((item, idx) => (
                <div
                  key={idx}
                  className={
                    idx === 1 ? "lg:ml-6 lg:-mr-6" : "lg:mr-6 lg:-ml-6"
                  }
                >
                  <DiscoverCard
                    name={item.name}
                    description={item.description}
                    icon={item.icon}
                    textColor={item.textColor}
                    bgColor={item.bgColor}
                    left={true}
                  />
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
