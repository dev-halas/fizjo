import styles from './HomeOffer.module.css';
import offerMan from '/public/images/offer_man.jpg';
import offerHands from '/public/images/offer_hands.jpg';
import Image from 'next/image';
import IconSquare from '../../IconSquare/IconsSquare';
import LinkButton from '../../Button/LinkButton';
import leafIcon from '/public/images/svg/leaf.svg';
import dotsIcon from '/public/images/svg/dots.svg';
import userIcon from '/public/images/svg/user.svg';

const HomeOffer: React.FC = () => {
  return (
    <div className={styles.homeOffer}>
      <div className={`container`}>
        <div className={`bigText ${styles.introText}`}>
          <div className="fontLightOrange">
            Dzięki zaangażowaniu, moi podpieczni
          </div>
          <div className='textWithIcon'>
            <span>rozstają się z bólem</span>
            <IconSquare src={leafIcon} iconConfig={{ 
              iconSize: 'max(24px, 2.5vw)',
              squareSize: 'max(48px, 5vw)',
              backgroundColor: '--light-orange'
            }}/>
            <span>na zawsze.</span>
          </div>
          <div>Zobacz jak mogę Ci pomóc.</div>
        </div>
      </div>
      <div className={`containerBig lightShadow ${styles.offerItems}`}>
        <div className={styles.offerItem}>
          <div className={styles.offerItem__box}>
            <div className={styles.iconWithText}>
              <IconSquare src={leafIcon} iconConfig={{ 
                iconSize: '50%',
                squareSize: '60%',
                backgroundColor: '--light-bg'
              }}/>
              <span className={styles.offerItem__title}>Masaże</span>
            </div>
            <LinkButton href="#" color='--orange'>
              Więcej
            </LinkButton>
          </div>
        </div>
        <div className={styles.offerItem}>
          <Image src={offerMan} alt="offer_man" fill/>
          <div className={styles.offerItem__box}></div>
        </div>
        <div className={styles.offerItem}>
          <div className={styles.offerItem__box}>
            <div className={styles.iconWithText}>
              <IconSquare src={dotsIcon} iconConfig={{ 
                iconSize: '50%',
                squareSize: '60%',
                backgroundColor: '--light-bg'
              }}/>
              <span className={styles.offerItem__title}>Inne <br/>usługi</span>
            </div>
            <LinkButton href="#" color='--orange'>
              Więcej
            </LinkButton>
          </div>
        </div>
        <div className={styles.offerItem}>
          <Image src={offerHands} alt="offer_hands" fill/>
          <div className={styles.offerItem__box}></div>
        </div>
        <div className={styles.offerItem}>
          <div className={styles.offerItem__box}>
            <div className={styles.iconWithText}>
              <IconSquare src={userIcon} iconConfig={{ 
                iconSize: '50%',
                squareSize: '60%',
                backgroundColor: '--light-bg'
              }}/>
              <span className={styles.offerItem__title}>Terapia <br/>manualna</span>
            </div>
            <LinkButton href="#" color='--orange'>
              Więcej
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOffer;