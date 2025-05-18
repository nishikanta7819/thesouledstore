import Menhero from "./Menhero";
import MenBestSellers from "./MenBestsellers";
import MenCategories from "./MenCategories";
import Fandom from "../Fandom/Fandom";

const Men = () => {
  return (
    <div className="page">
      <Menhero />
      <MenBestSellers />
      <MenCategories />
      <Fandom />
    </div>
  );
};

export default Men;
