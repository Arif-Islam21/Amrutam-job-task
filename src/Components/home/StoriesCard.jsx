import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const StoriesCard = () => {
  return (
    <div className="card group bg-base-100 mb-12 shadow-xl pb-8">
      <div className="bg-[#ECFEE7] rounded-t-lg px-6 transition delay-300 group-hover:bg-[#ECE7FF]">
        <h2 className="text-start font-semibold py-2 text-lg">
          Consulted for Skin
        </h2>
      </div>
      <div className="px-6 py-2 flex gap-4 items-start">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-bold">Ariful Islam</h2>
          <p>Kurigram, Bangladesh</p>
        </div>
        <div className="">
          <p>24/12/2024</p>
        </div>
      </div>
      {/* Rating here */}
      <div className="px-6 mt-4">
        <Rating
          readonly
          initialRating={5}
          fullSymbol={<FaStar size={20} color="#FFC107" />}
        />
      </div>
      {/* card content here */}
      <div className="px-6 py-3">
        <h2 className="card-title">Abhyanga</h2>
        <p>Full-body massage with warm herbal oils.</p>
      </div>
    </div>
  );
};

export default StoriesCard;
