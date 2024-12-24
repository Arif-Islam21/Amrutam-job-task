import ApproachCard from "../../Components/ApproachCard";
import SectionTitle from "../../Components/SectionTitle";

const Approach = () => {
  const approachData = [
    {
      id: 1,
      title: "Make Appointment",
      details:
        "You must make an appointment in advance, to choose the service and date.",
    },
    {
      id: 2,
      title: "Consultations",
      details:
        "The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
      id: 3,
      title: "Treatment Planning",
      details:
        "The Ayurvedic practitioner creates a personalized treatment plan for you",
    },
    {
      id: 4,
      title: "Maintenance",
      details:
        "These visits allow for assessment of progress, adjustments to the treatment.",
    },
  ];

  return (
    <div className="container mx-auto">
      <SectionTitle
        title="Our ayurvedic approach"
        description="At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions."
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
        {approachData.map((item) => (
          <ApproachCard
            key={item.id}
            id={item.id}
            title={item.title}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Approach;
