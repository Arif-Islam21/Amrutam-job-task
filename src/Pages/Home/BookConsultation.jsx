import image from "../../assets/pictures/parallax.png";

const BookConsultation = () => {
  return (
    <div
      className="hero bg-fixed bg-center bg-cover min-h-[70vh]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl text-primary lg:text-4xl  font-bold">
              Ready to restore harmony in your mind, body and spirit?
            </h1>
            <button className="btn uppercase bg-secondary text-white border-none hover:text-secondary">
              Book A Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
