const Banner = () => {
  return (
    <div
      className="hero bg-fixed bg-center bg-cover min-h-screen lg:min-h-[80vh]"
      style={{
        backgroundImage:
          "url(https://t4.ftcdn.net/jpg/05/90/17/23/360_F_590172388_eEZ8vGqNqAtYSNP7LcRTMyl0db5kemNX.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="container mx-auto">
        <div className="">
          <div className="text-white">
            <h3 className="text-2xl text-white font-light mb-4">
              Namaste, Welcome to Amrutam
            </h3>
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold">
              Step into Holistic Healing with{" "}
              <span className="underline">Ayurveda</span> <br /> Book
              Consultation with certified Experts.
            </h1>
            <p className="mb-5 max-w-lg">
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
    </div>
  );
};

export default Banner;
