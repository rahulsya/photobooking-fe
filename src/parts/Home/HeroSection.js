import HeroImage from "../../assets/HeroImage.jpg";

function HeroSection() {
  return (
    <div className="pt-12">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-5xl font-bold capitalize mb-5 text-gray-900">
            Take Your Best <br /> Moment
          </p>
          <p className="text-lg font-semibold capitalize w-3/4 mb-5">
            We provide the best quality photo for your best moment
          </p>
          <button className="px-3 py-2 font-bold text-lg rounded bg-yellow-500 text-white inline">
            Get Started
          </button>
        </div>
        <div className="w-1/2 hidden lg:block">
          <img width="600" height="600" src={HeroImage} alt="hero img" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
