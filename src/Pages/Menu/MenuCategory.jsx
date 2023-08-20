import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div className="my-8">
      <div className="grid md:grid-cols-2 gap-2 items-center justify-center">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="btn btn-outline border-0 border-b-4  mt-4 ">
          view full menu
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
