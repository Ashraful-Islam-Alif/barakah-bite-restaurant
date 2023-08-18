import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import feature from "../../../assets/home/featured.jpg";

const Feature = () => {
  return (
    <div className="pt-8 my-20  text-white relative">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-fixed"
        style={{
          backgroundImage: `url(${feature})`,
          filter: "blur(8px)", // Adjust the blur intensity if needed
        }}
      ></div>
      {/* Color overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50" // Adjust color and opacity
      ></div>
      {/* Content */}
      <div className="relative z-10">
        <SectionTitle subheading={"check it ouut"} heading={"From Our Menu"} />

        <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
          <div>
            <img src={feature} alt="" />
          </div>
          <div className="md:ml-10">
            <h2 className="text-xl">March 20, 2023</h2>
            <p className="text-xl">WHERE CAN I GET SOME?</p>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              cupiditate nam dicta error voluptas sed, voluptatibus saepe quae
              asperiores maiores nobis eum repudiandae nostrum pariatur
              blanditiis provident illo eius quos vero ipsa natus eveniet. Unde
              aspernatur quos iusto ex, est veritatis. Illo doloremque tempore
              veniam necessitatibus nemo? Esse, libero rem?
            </p>
            <button className="btn btn-outline border-0 border-b-4 text-white mt-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
