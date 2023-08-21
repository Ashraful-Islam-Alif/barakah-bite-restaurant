import { Helmet } from "react-helmet-async";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

import imgMenu from "../../assets/menu/banner3.jpg";
import imgDessert from "../../assets/menu/dessert-bg.jpeg";
import imgPizza from "../../assets/menu/pizza-bg.jpg";
import imgsalad from "../../assets/menu/salad-bg.jpg";
import imgSoup from "../../assets/menu/soup-bg.jpg";
import Cover from "../Shared/Cover/Cover";
const Menu = () => {
  const [menu] = useMenu([]);
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Barakah Bites Restuarant | Menu</title>
      </Helmet>
      <Cover img={imgMenu} title={"Our Menu"}></Cover>
      <SectionTitle
        subheading={"Don't miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <Cover img={imgDessert} title={"dessert"}></Cover>
      <MenuCategory items={dessert} title={"dessert"}></MenuCategory>

      <Cover img={imgPizza} title={"pizza"}></Cover>
      <MenuCategory items={pizza} title={"pizza"}></MenuCategory>

      <Cover img={imgsalad} title={"salad"}></Cover>
      <MenuCategory items={salad} title={"salad"}></MenuCategory>

      <Cover img={imgSoup} title={"soup"}></Cover>
      <MenuCategory items={soup} title={"soup"}></MenuCategory>
    </div>
  );
};

export default Menu;
