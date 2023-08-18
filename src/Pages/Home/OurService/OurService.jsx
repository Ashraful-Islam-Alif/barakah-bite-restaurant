import cheifService from "../../../assets/home/chef-service.jpg";
const OurService = () => {
  return (
    <div
      className="hero w-full my-8 "
      style={{ backgroundImage: `url(${cheifService})` }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl bg-white text-black p-12 my-20">
          <h1 className="mb-5 text-4xl uppercase mx-8">
            Barakah Bites Restaurant
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
