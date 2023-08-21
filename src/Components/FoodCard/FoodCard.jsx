const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className=" card w-96 bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt="" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white px-2">
        ${price}
      </p>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-500">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
