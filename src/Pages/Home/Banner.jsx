import image from "../../assets/pictures/banner.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen lg:min-h-[80vh] relative">
      {/* Gradient Overlay for Left Half */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30 z-10"></div>

      {/* Right Half Background Image */}
      <div
        className="absolute top-0 right-0 h-full w-full lg:w-1/2 bg-cover bg-right"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto relative z-20">
        <div className="text-white max-w-lg">
          <h3 className="text-2xl text-white font-light mb-4">
            Namaste, Welcome to Amrutam
          </h3>
          <h1 className="mb-5 text-2xl lg:text-5xl lg:min-w-[80vw] font-bold">
            Step into Holistic Healing with{" "}
            <span className="underline">Ayurveda</span> <br /> Book Consultation
            with certified Experts.
          </h1>
          <p className="mb-5">
            Dive into the world of ayurveda and Experience Personalized Health
            Solutions and Holistic Guidance from Trusted Ayurvedic Doctors
            Anytime, anywhere.
          </p>
          <button className="btn uppercase bg-secondary text-white border-none hover:text-secondary">
            Book An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
