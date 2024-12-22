const SectionTitle = ({ title, description }) => {
  return (
    <div className="text-center py-6">
      <h2 className="lg:text-4xl text-2xl text-secondary underline decoration-[#3a643b47] font-semibold">
        {title}
      </h2>
      <p className="max-w-lg mx-auto my-6">{description}</p>
    </div>
  );
};

export default SectionTitle;
