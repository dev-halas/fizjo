import React from "react";
import ImageMasked from "../components/ImageMasked/ImageMasked";
import IconSquare from "../components/IconSquare/IconsSquare";
import styles from './offer.module.css';
import Image from 'next/image';

import Accordion from "../components/Accordion/Accordion";


import offerHero from '/public/images/offer-hero.jpg';
import offerMask from '/public/images/svg/masks/offer.svg';
import leafIcon from '/public/images/svg/leaf.svg';
import offerMan from '/public/images/offer_happy_man.jpg';

const accordionData = [
  { 
    title: "masaż sportowy", 
    content: "<h1>Habitasse neque</h1><p>eu turpis potenti sapien tempor ipsum vitae fringilla. Nam tincidunt amet aliquam sem habitasse odio. Lacus lectus massa aliquam facilisis mi pulvinar faucibus quam. Consectetur non amet vitae sollicitudin elit justo. Id vestibulum at ipsum fermentum orci nulla. Imperdiet amet in sed sagittis purus tempus. In penatibus consequat quis lectus malesuada adipiscing suscipit. Morbi et viverra at ultrices aenean curabitur. Commodo nulla vestibulum vel sed vulputate. Pretium ac at nisi sit pretium magna. Laoreet tincidunt iaculis enim tellus. Justo pellentesque est mollis aliquet at tincidunt. Massa scelerisque vel leo molestie eget viverra. Parturient vulputate elit aliquam nunc et tristique mauris elit amet. Integer elementum consequat mauris faucibus scelerisque felis at. Id hac netus condimentum ac suspendisse dolor quam. Nascetur tempor nunc porta faucibus ut. Nisl at mattis arcu faucibus dictum sapien purus mattis condimentum.</p>" 
  },
  { title: "masaż leczniczy", content: "Treść sekcji 2" },
  { title: "masaż relaksacyjny", content: "Treść sekcji 3" },
  { title: "masaż klasyczny", content: "Treść sekcji 3" },
];

const Offer: React.FC = () => {
  return (
    <div className={styles.offer}>
      <div className="container">
        
        <div className="mtb48">
          <div className='bigText textWithIcon'>
            <span className="fontLightOrange">Masaże,</span>
            <span>które wykonuję</span>
          </div>
          <div className='bigText textWithIcon'>
            <span>zrelaksują</span>
            <span className="fontLightOrange">i pomogą</span>
            <span>
              <IconSquare src={leafIcon} iconConfig={{ 
                iconSize: 'max(24px, 2.5vw)',
                squareSize: 'max(48px, 5vw)',
                backgroundColor: '--light-orange'
              }}/>
            </span>
            <span className="fontLightOrange">z bólem</span>
          </div>
          <div className='bigText textWithIcon'>
            <span>raz na zawsze.</span>
          </div>
        </div>

        <ImageMasked 
          imageUrl={offerHero}
          svgMask={offerMask}
          aspectRatio={'3.65 / 1'}
        />

        <div className={styles.offerContent}>
          <div className={styles.offerContent__spacer}></div>
          <div className={styles.offerContent__wrapper}>
            <div className={styles.offerContent__about}>
              <div className={styles.offerContent__text}>
                <h2>
                  <span className="fontLightOrange">Zajmuję się różnymi rodzajami masażów.</span><br/>
                  zaczynając od masaży relaksacyjnych, a na sportwych kończąc.
                </h2>
                <p className="mt24">
                  Lorem ipsum dolor sit amet consectetur. Justo eget est pellentesque donec ac phasellus viverra. Eget netus quam potenti vel tortor fusce. Neque placerat lorem volutpat praesent nunc elit lectus pellentesque. Velit ut interdum orci aliquam in. Sed id a odio sed pellentesque mattis.
                </p>
              </div>
              <div></div>
              <div className={styles.offerContent__image}>
                <Image src={offerMan} alt="oferta - fizjo toruń" />
              </div>
            </div>
            <Accordion items={accordionData} />
          </div>
          <div className={styles.offerContent__spacer}></div>
        </div>
        

      </div>
    </div>
 
  );
};

export default Offer;