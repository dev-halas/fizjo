import Hero from "./components/Hero/Hero";
import HomeOffer from "./components/Home/offer/HomeOffer";
import About from "./components/Home/about/about";
import styles from "./page.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <Hero />
      <HomeOffer />
      <About />
    </div>
  );
};

export default Home;
