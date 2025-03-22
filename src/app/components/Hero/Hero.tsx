"use client";

import styles from './Hero.module.css';
import { LinkButton } from '@/app/components';
import { ImageMasked } from '@/app/components';

import heroImg from '/public/images/hero.jpg';
import heroMask from '/public/images/svg/masks/hero.svg';
import { translate } from '@/app/utils/localize';

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={`${styles.heroWrapper} container`}>
        
        <div className={styles.heroLeft}>
          <h2 className={`bigText ${styles.heroText}`}>
            <span className='fontLightOrange'>
              {translate('home.hero.text_1')}
            </span>
            <span className='fontLightOrange'>
              {translate('home.hero.text_2')}
            </span>
            <span>
              {translate('home.hero.text_3')}
            </span>
            <span className='fontOrange'>
              {translate('home.hero.text_4')}
            </span>
          </h2>
          <div className={styles.heroButtons}>
            <LinkButton href="#">
              {translate('home.hero.letsKnowMe')}
            </LinkButton>
            <LinkButton href="#" noArrow>
              {translate('home.hero.services')}
            </LinkButton>
          </div>
        </div>

        <div className={styles.heroImage}>
          <ImageMasked 
            imageUrl={heroImg}
            svgMask={heroMask}
            aspectRatio={'9 / 8.4'}
          />   
        </div>

      </div>
    </div>
  );
};

export default Hero;
