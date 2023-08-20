const MenuItem = ({ item }) => {
  const { name, recipe, image, category, price } = item;
  return (
    <div>
      <div className="flex space-x-8">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[100px]"
          src={image}
          alt=""
        />

        <div>
          <h2 className="text-xl uppercase">{name} ---------------</h2>
          <p>{recipe}</p>
          <p>{category}</p>
        </div>
        <p className="text-yellow-600">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
