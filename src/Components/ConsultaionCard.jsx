// eslint-disable-next-line react/prop-types
const ConsultaionCard = ({ text, desc }) => {
  return (
    <div className="rounded-xl text-center flex justify-center items-center flex-col bg-white shadow-md min-h-[35vh] border-t-4 border-green-800">
      <h2 className="text-2xl font-semibold text-secondary">{text}</h2>
      <p className="px-8 mt-4">{desc}</p>
    </div>
  );
};

export default ConsultaionCard;
