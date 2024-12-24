// eslint-disable-next-line react/prop-types
const ApproachCard = ({ id, title, details }) => {
  return (
    <div className="bg-primary rounded-lg border-t-4 border-secondary min-h-[30vh]">
      <div className="size-16 rounded-full mx-auto my-4 bg-secondary flex justify-center items-center">
        <h1 className="text-3xl font-bold text-white">{id}</h1>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-center text-secondary">
          {title}
        </h2>
        <p className="px-8 pb-6">{details}</p>
      </div>
    </div>
  );
};

export default ApproachCard;
