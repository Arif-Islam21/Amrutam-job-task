import expert from "../../assets/pictures/experts.png";
import { GiGraduateCap } from "react-icons/gi";
import { CiLink } from "react-icons/ci";

const ExpertCard = () => {
  return (
    <div className="card bg-primary">
      <div className="relative">
        <div className="avatar flex justify-center items-center mt-6">
          <div className="w-24 rounded-full">
            <img src={expert} />
          </div>
        </div>
        <div className="absolute -bottom-3 left-[50%] translate-x-[-50%]">
          <div className="text-center flex justify-center items-center gap-1 px-6 bg-black/50 w-16 rounded-lg">
            <h2 className="font-bold text-white">4.5</h2>
            <h2 className="font-bold text-amber-500">⭐</h2>
          </div>
        </div>
      </div>
      <div className="card-body text-center">
        <h2 className="text-xl font-semibold ">Dr. Vaishali sharma</h2>
        <p className="text-gray-400">Ayurveda Practitioner (BAMS, MD)</p>
        <h4 className="font-semibold flex justify-center items-center gap-1">
          <span className="text-gray-400">
            <GiGraduateCap size={18} />
          </span>
          25 years of experience
        </h4>
        <div className="px-4 py-1 bg-secondary/30 mx-12 rounded-lg">
          <h4 className="text-secondary font-semibold flex justify-center items-center gap-1">
            <span className="">
              <CiLink size={18} />
            </span>
            Skin Specialist
          </h4>
        </div>
      </div>
      <div className="bg-secondary rounded-b-2xl">
        <h2 className="font-bold text-xl pb-4 text-center text-white pt-2">
          Book A Session
        </h2>
      </div>
    </div>
  );
};

export default ExpertCard;
