import BannerExtraCard from "../../Components/BannerExtraCard";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { LiaUserNurseSolid } from "react-icons/lia";
import { FaFilePrescription } from "react-icons/fa";

const BannerExtra = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto">
        <div className="flex gap-3 justify-center">
          <BannerExtraCard
            icon={<LuMessageCircleMore size={28} />}
            text="convenient online & In-clinic consultations"
          />
          <BannerExtraCard
            icon={<MdOutlineSecurity size={28} />}
            text="Safe and effective treatment"
          />
          <BannerExtraCard
            icon={<LiaUserNurseSolid size={28} />}
            text="Experienced Ayurvedic Practitioners"
          />
          <BannerExtraCard
            icon={<FaFilePrescription size={28} />}
            text="personalized Treatment Plans & Guidance"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerExtra;
