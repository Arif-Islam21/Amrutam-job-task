import ConsultaionCard from "../../Components/ConsultaionCard";
import SectionTitle from "../../Components/SectionTitle";

const Consultation = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto min-h-[40vh]">
        <SectionTitle title={"What sets Ayurvedic consultations apart?"} />
        <div className="grid grid-cols-12 px-2 lg:px-0 my-4 lg:my-0 pb-12 gap-3">
          <div className="col-span-12 lg:col-span-5">
            <ConsultaionCard
              text="स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं |"
              desc="[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]"
            />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <img
              src="https://media.istockphoto.com/id/1420933542/photo/woman-hair-massage-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=D8cGOilaglYCv40WbHjiV2u-QFDhNMHlH2xxAtEmfdE="
              alt="image here"
              className="rounded-xl shadow-md min-h-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <ConsultaionCard
              text="precise diagnosis"
              desc="Ayurvedas core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment."
            />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <ConsultaionCard
              text="Zero side-effects"
              desc="Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs "
            />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <img
              src="https://media.nature.com/lw767/magazine-assets/nindia.2020.101/nindia.2020.101_19310518.jpg"
              alt="image here"
              className="rounded-xl shadow-md min-h-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <ConsultaionCard
              text="Individual Treatment"
              desc="all Treatments are personalized based on a person's unique constitution and health concerns."
            />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsbCJ2JPObJ-YEH0Ld4QU0MzYqnXGfO-M2w&s"
              alt="image here"
              className="rounded-xl shadow-md min-h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
