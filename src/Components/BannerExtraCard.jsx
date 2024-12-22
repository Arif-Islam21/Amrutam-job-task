// eslint-disable-next-line react/prop-types
const BannerExtraCard = ({ icon, text }) => {
  return (
    <div className="flex justify-center py-4 items-center gap-2">
      <div className="border-2 rounded-full p-4 bg-white text-secondary">
        {icon}
      </div>
      <h2 className="font-semibold text-secondary">{text}</h2>
    </div>
  );
};

export default BannerExtraCard;
