import StoriesCard from "../../Components/home/StoriesCard";
import SectionTitle from "../../Components/SectionTitle";

const Stories = () => {
  return (
    <div className="bg-primary min-h-[60vh]">
      <div className="container mx-auto">
        <SectionTitle title="STORIES FROM OUR VALUED CUSTOMERS!" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <StoriesCard />
          <StoriesCard />
          <StoriesCard />
        </div>
      </div>
    </div>
  );
};

export default Stories;
