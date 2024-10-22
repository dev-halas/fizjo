import React from "react";
import styles from './about.module.css';
import ImageMasked from "../../ImageMasked/ImageMasked";
import IconSquare from "../../IconSquare/IconsSquare";
import aboutMask from '/public/images/svg/masks/home-about.svg';
import aboutImg from '/public/images/about-home.jpg';
import aboutSvg from '/public/images/svg/about_home.svg';

const About: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutCounters}>
          <div className={styles.counter}>
            <span>4</span>
            <p>specjalizacje</p>
          </div>
          <div className={styles.counter}>
            <span>16+</span>
            <p>lat doświadczenia</p>
          </div>
          <div className={styles.counter}>
            <span>1200+</span>
            <p>zadowolonych<br/>Klientów</p>
          </div>
        </div>
        <div className={styles.aboutPhotos}>
          <IconSquare src={aboutSvg} className={styles.aboutSvg} iconConfig={{ 
            iconSize: '40%',
            squareSize: '40%',
            backgroundColor: '--light-orange'
          }}/>
          <div className={styles.maskedImage}>
            <ImageMasked
              imageUrl={aboutImg}
              svgMask={aboutMask}
              aspectRatio={'5.13/6.68'}
            />
          </div>
        </div>
        <div className={styles.aboutText}>
          <h3 className="fontLightOrange">
            Lata doświadczenia,
          </h3>
          <h3 className="mb24">
            setki przepracowanych przypadków.
          </h3>
          <p className="mb24">Lorem ipsum dolor sit amet consectetur. Justo eget est pellentesque donec ac phasellus viverra. Eget netus quam potenti vel tortor fusce. Neque placerat lorem volutpat praesent nunc elit lectus pellentesque. Velit ut interdum orci aliquam in. Sed id a odio sed pellentesque mattis.</p>
          <p>Elementum pulvinar eu id posuere vestibulum laoreet tortor nullam dictum. Dolor quis dis volutpat tellus iaculis eros nulla aliquam mauris. Duis amet vitae at curabitur mollis.</p>
        </div>
      </div>
    </div>
  );
};

export default About;