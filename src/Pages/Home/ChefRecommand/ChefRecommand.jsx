import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ChefRecommand = () => {
  return (
    <section className="my-8">
      <SectionTitle
        subheading={"Should Try"}
        heading={"Chef Recommends"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <img
            src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg"
            alt="Shoes"
            className=""
          />
          <div className="card-body items-center text-center">
            <h2 className="card-title my-2 font-bold">Escalope de Veau</h2>
            <p>
              Pan roasted haddock fillet wrapped in smoked French bacon with pea
              purée and tomato and chive vinaigrette
            </p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-600">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <img
            src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg"
            alt="Shoes"
            className=""
          />
          <div className="card-body items-center text-center">
            <h2 className="card-title my-2 font-bold">Fish Parmentier</h2>
            <p>
              Pan roasted haddock fillet wrapped in smoked French bacon with pea
              purée and tomato and chive vinaigrette
            </p>
            <div className="card-actions">
              <button className="btn btn-active btn-neutral">
                Add To Cart
              </button>
              {/* <button className="btn btn-outline my-4 text-yellow-600">
                Add To Cart
              </button> */}
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <img
            src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-3-370x247.jpg"
            alt="Shoes"
            className=""
          />
          <div className="card-body items-center text-center">
            <h2 className="card-title my-2 font-bold">Pizza</h2>
            <p>
              Pan roasted haddock fillet wrapped in smoked French bacon with pea
              purée and tomato and chive vinaigrette
            </p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-600">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommand;
