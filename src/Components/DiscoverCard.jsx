import { TbHeartPlus } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const DiscoverCard = ({ left }) => {
  return (
    <div
      className={`flex flex-col-reverse border-2 shadow-md lg:shadow-none lg:border-none lg:rounded-none lg:mt-0 lg:py-0 rounded-lg mt-6 py-12 lg:flex-row gap-4 ${
        left && "lg:flex-row-reverse"
      } items-center`}
    >
      <div className="min-w-52 text-center">
        <h2 className="font-bold">Personalized Wellness</h2>
        <p className="text-sm text-center px-10 mt-4 w-full text-gray-600">
          Get treatments made just for you based on your individual doshas (
          body type)
        </p>
      </div>
      <div className="text-[#2f96d6] rounded-full p-4 bg-[#2f96d64f]">
        <TbHeartPlus size={40} />
      </div>
    </div>
  );
};

export default DiscoverCard;
