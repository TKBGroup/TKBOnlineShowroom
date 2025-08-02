import { useState, useEffect } from 'react';

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyDown);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Sync body overflow with menu state
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);


  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}> 
          <a href="https://tkbgroupdesigns.com" target="_blank" rel="noopener noreferrer">
            <img src="images/TKB.png" alt="TKB Group Designs Logo" />
          </a>
        </div>
        <button
          className={`${styles.mobileNavToggle} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}> 
          <li><a href="https://tkbgroupdesigns.com/services" target="_blank" rel="noopener noreferrer">Services</a></li>
          <li><a href="https://tkbgroupdesigns.com/commercial" target="_blank" rel="noopener noreferrer">Commercial</a></li>
          <li><a href="https://tkbgroupdesigns.com/residential" target="_blank" rel="noopener noreferrer">Residential</a></li>
          <li><a href="https://tkbgroupdesigns.com/contact-us" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
        </ul>
      </div>
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
      ></div>
    </nav>
  );
}