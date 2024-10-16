"use client";

import styles from './Hero.module.css';
import LinkButton from '../Button/LinkButton';
import ImageMasked from '../ImageMasked/ImageMasked';

import heroImg from '/public/images/hero.jpg';
import heroMask from '/public/images/svg/masks/hero.svg';

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={`${styles.heroWrapper} container`}>
        
        <div className={styles.heroLeft}>
          <h2 className={`bigText ${styles.heroText}`}>
            <span className='fontLightOrange'>Jestem Marek</span>
            <span className='fontLightOrange'>i sprawiam, </span>
            <span>że uciążliwy</span>
            <span className='fontOrange'>ból znika.</span>
          </h2>
          <div className={styles.heroButtons}>
            <LinkButton href="#">
              Poznaj mnie
            </LinkButton>
            <LinkButton href="#" noArrow>
              Usługi
            </LinkButton>
          </div>
        </div>

        <div className={styles.heroImage}>
          <ImageMasked 
            imageUrl={heroImg}
            svgMask={heroMask}
          />   
        </div>

      </div>
    </div>
  );
};

export default Hero;
