const MenuItem = ({ item }) => {
  const { name, recipe, image, category, price } = item;
  return (
    <div className="mx-auto">
      <div className="flex space-x-8 mx-2 p-4">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="h-40 w-20 object-cover "
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
