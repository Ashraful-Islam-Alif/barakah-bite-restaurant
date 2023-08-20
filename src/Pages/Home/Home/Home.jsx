import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommand from "../ChefRecommand/ChefRecommand";
import Feature from "../Feature/Feature";
import OurService from "../OurService/OurService";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Barakah Bites Restaurant | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <OurService></OurService>
      <PopularMenu></PopularMenu>
      <ChefRecommand></ChefRecommand>
      <Feature></Feature>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
