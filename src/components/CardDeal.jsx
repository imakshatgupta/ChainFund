import { node } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section} data-aos="fade-up">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Discover superior banking solutions <br className="sm:block hidden" /> 
        in just a few simple steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Explore decentralized financial options tailored to your needs. 
        Benefit from secure transactions and transparent protocols to 
        elevate your banking experience.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={node} alt="billing" className="w-[100%] h-[100%] object-cover" />
    </div>
  </section>
);

export default CardDeal;