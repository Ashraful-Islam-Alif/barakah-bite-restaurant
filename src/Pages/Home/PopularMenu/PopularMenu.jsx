import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu([]);
  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle
        subheading={"Check it out"}
        heading={"From our Menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-2 items-center justify-center">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="btn btn-outline border-0 border-b-4  mt-4 ">
          view full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
