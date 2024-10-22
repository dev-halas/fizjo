import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Map from '../Map/map';
import IconSquare from '../IconSquare/IconsSquare';
import mapPin from '/public/images/mapMarker.svg';
import people from '/public/images/svg/people.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerText}>
          <div className='bigText'>
            <span className='fontLightOrange'>Mój gabinet </span>
            <span className='fontOrange'>w Toruniu</span>
          </div>
          <div className='bigText textWithIcon'>
            <span>znajduje się</span>
            <span>
              <IconSquare src={mapPin} iconConfig={{ 
                iconSize: 'max(24px, 2.5vw)',
                squareSize: 'max(48px, 5vw)',
                backgroundColor: '--light-orange'
              }}/>
            </span>
            <span>na ul. Kościuszki 9/11.</span>
          </div>
        </div>
        <div>
          <Map />
        </div>
        <div className={styles.footerText}>
          <div className='bigText'>
            <span className='fontLightOrange'>Służę pomocą.</span>
          </div>
          <div className='bigText textWithIcon'>
            <span>Wybierz wygodną</span>
            <span>
              <IconSquare src={people} iconConfig={{ 
                iconSize: 'max(24px, 2.5vw)',
                squareSize: 'max(48px, 5vw)',
                backgroundColor: '--light-orange'
              }}/>
            </span>
            <span>formę</span>
          </div>
          <div className='bigText'>
            <span className='fontOrange'>kontaktu.</span>
          </div>
        </div>
        <div className={styles.footerCta}>
          <Link href="#" className='callToAction'>
            <Image src='/images/svg/phoneIcon.svg' alt="Phone" width={28} height={28} /> 
            <span>+48 517 706 357</span>
          </Link>
          <Link href="#" className='callToAction'>
            <Image src='/images/svg/mail.svg' alt="Mail" width={36} height={36} /> 
            <span>marekbober@wp.pl</span>
          </Link>
        </div>
      </div>
      <p>&copy; 2024 Twoeja Firma</p>
    </footer>
  );
};

export default Footer;