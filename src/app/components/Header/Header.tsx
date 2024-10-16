"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerButton from './Hamburger/HamburgerButton';
import styles from './Header.module.css';

interface HamburgerButtonProps {
  onToggle: (opened: boolean) => void;
}

const Header: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false); 

  const handleToggleMenu = (opened: boolean): void => {
    setMenuOpened(opened);
  };

  useEffect(() => {
    const handleScroll = ():void => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.headerInner} container`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/images/svg/logo-marek-bober.svg" alt="logo" width={50} height={50} priority />
          </Link>
        </div>

        {/* Menu nawigacji */}
        <nav className={`${styles.navbar} ${menuOpened ? styles.navbarOpen : ''}`}>
          <ul>
            <li><Link href="/">Marek Bober</Link></li>
            <li><Link href="/offer">Moja oferta</Link></li>
            <li><Link href="#services">Blog</Link></li>
            <li><Link href="#contact">Kontakt</Link></li>
          </ul>
        </nav>

        <a className={styles.callToAction}>
          <Image src='/images/svg/phoneIcon.svg' alt="Phone" width={20} height={20} /> 
          <span>+48 517 706 357</span>
        </a>

        {/* Hamburger - menu na urządzenia mobilne */}
        <HamburgerButton onToggle={(opened: boolean) => handleToggleMenu(opened)} />
      </div>
    </header>
  );
};

export default Header;

