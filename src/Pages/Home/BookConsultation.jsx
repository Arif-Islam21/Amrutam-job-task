const BookConsultation = () => {
  return (
    <div
      className="hero bg-fixed bg-center bg-cover min-h-[70vh]"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHezbZfIsI7w7LY1ihU_LvVtVV0_Sqlm3kOw&s)",
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
