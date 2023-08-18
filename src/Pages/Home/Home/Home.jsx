import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommand from "../ChefRecommand/ChefRecommand";
import Feature from "../Feature/Feature";
import OurService from "../OurService/OurService";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <OurService></OurService>
      <PopularMenu></PopularMenu>
      <ChefRecommand></ChefRecommand>
      <Feature></Feature>
    </>
  );
};

export default Home;
