import ConsultaionCard from "../../Components/ConsultaionCard";
import SectionTitle from "../../Components/SectionTitle";
import consult1 from "../../assets/pictures/consult1.png";
import consult2 from "../../assets/pictures/consult2.png";
import consult3 from "../../assets/pictures/consult3.png";

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
              src={consult2}
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
              src={consult1}
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
              src={consult3}
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
