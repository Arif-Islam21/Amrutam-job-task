import iphone from "../../assets/pictures/iPhone 13.png";
import { SiGoogleplay } from "react-icons/si";
import { FaApple } from "react-icons/fa";

const GetApp = () => {
  return (
    <div className="bg-primary">
      <div className="hero container mx-auto min-h-[80vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={iphone} className="max-w-sm " />
          <div>
            <div className="text-start pt-6">
              <h2 className="lg:text-4xl text-2xl text-secondary underline decoration-[#3a643b47] font-semibold">
                Amrutam home App
              </h2>
              <p className="max-w-lg my-3">
                The Amrutam Home App is your one-stop app for all things
                Ayurveda! Apart from mimicking the significant characteristics
                of our website, this app offers a wide range of additional
                features.
              </p>
            </div>
            <h2 className="font-semibold text-xl lg:max-w-[40vw]">
              Get a diet & lifestyle consultation with ayurvedic experts across
              the globe
            </h2>
            <h1 className="font-bold text-xl mt-6">Get the App now</h1>
            <div className="flex gap-4 flex-col lg:flex-row items-center mt-4">
              <div className="bg-black px-6 py-2 rounded-lg flex items-center gap-4 w-full justify-center lg:max-w-56">
                <h2 className="text-cyan-500">
                  <SiGoogleplay size={32} />
                </h2>
                <div>
                  <h3 className="text-white font-semibold">Git It On</h3>
                  <h1 className="text-white font-bold text-xl">Google Play</h1>
                </div>
              </div>
              <div className="bg-black px-6 py-2 rounded-lg flex items-center gap-4 w-full justify-center lg:max-w-56">
                <h2 className="text-white">
                  <FaApple size={32} />
                </h2>
                <div>
                  <h3 className="text-white font-semibold">Download on the</h3>
                  <h1 className="text-white font-bold text-xl">App Store</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
