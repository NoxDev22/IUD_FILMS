import { Slide } from "../components/slide";
//CONSTANTS
import { HERO_LIST } from "../constants/heroList";

export function Hero() {
  return (
    <section className="hero">
      <Slide list={HERO_LIST} />
    </section>
  );
}
