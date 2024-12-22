import { TbHeartPlus } from "react-icons/tb";

const DiscoverCard = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="min-w-52">
        <h2 className="font-bold">Personalized Wellness</h2>
        <p className="text-sm w-full">
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
