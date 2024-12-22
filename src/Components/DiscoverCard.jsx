/* eslint-disable react/prop-types */

const DiscoverCard = ({
  left,
  bgColor,
  textColor,
  icon,
  description,
  name,
}) => {
  return (
    <div
      className={`flex flex-col-reverse border-2 shadow-md lg:shadow-none lg:border-none lg:rounded-none lg:mt-0 lg:py-0 rounded-lg mt-6 py-12 lg:flex-row gap-4 ${
        left && "lg:flex-row-reverse"
      } items-center`}
    >
      <div className="min-w-52 text-center">
        <h2 className="font-bold">{name}</h2>
        <p className="text-sm text-center px-10 mt-4 w-full text-gray-600">
          {description}
        </p>
      </div>
      <div
        className={`text-[${textColor}] border rounded-full p-4 bg-[${bgColor}]`}
      >
        {icon}
      </div>
    </div>
  );
};

export default DiscoverCard;
