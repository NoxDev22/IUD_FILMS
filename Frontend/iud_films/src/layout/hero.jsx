import { Slide } from "../components/slide";
//CONSTANTS
import { HERO_LIST } from "../constants/heroList.js";

export function Hero() {
  return (
    <section className="hero">
      <Slide list={HERO_LIST} />
    </section>
  );
}
