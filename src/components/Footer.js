import styles from '../styles/Footer.module.css'; 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}> 
        <a href="https://tkbgroupdesigns.com/residential" target="_blank" rel="noopener noreferrer">
          <img src="/images/logo-1.png" loading="lazy" alt="Residential" />
        </a>
        <a href="https://tkbgroupdesigns.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/logo-2.png" loading="lazy" alt="TKB Group" />
        </a>
        <a href="https://tkbgroupdesigns.com/commercial" target="_blank" rel="noopener noreferrer">
          <img src="/images/logo-3.png" loading="lazy" alt="Commercial" />
        </a>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.textLinks}> 
          <p><a href="https://tkbgroupdesigns.com/residential" target="_blank" rel="noopener noreferrer">Residential</a></p>
          <p><a href="https://tkbgroupdesigns.com/commercial" target="_blank" rel="noopener noreferrer">Commercial</a></p>
          <p><a href="https://tkbgroupdesigns.com/services" target="_blank" rel="noopener noreferrer">Services</a></p>
          <p><a href="https://tkbgroupdesigns.com/about-us" target="_blank" rel="noopener noreferrer">About Us</a></p>
          <p><a href="https://tkbgroupdesigns.com/contact-us" target="_blank" rel="noopener noreferrer">Contact Us</a></p>
          <p><a href="https://tkbgroupdesigns.com/privacy-page" target="_blank" rel="noopener noreferrer">Privacy Page</a></p>
        </div>
        <div className={styles.socials}>
          {/* These are also external links, so use standard <a> tags */}
          <a href="https://www.facebook.com/tkbcabinetry/" target="_blank" rel="noopener noreferrer">
            <img src="/images/Social.png" alt="Facebook" loading="lazy" />
          </a>
          <a href="https://instagram.com/tkbcabinetry/" target="_blank" rel="noopener noreferrer">
            <img src="/images/Social-1.png" alt="Instagram" loading="lazy" />
          </a>
          <a href="https://www.linkedin.com/company/tkb-custom-millwork" target="_blank" rel="noopener noreferrer">
            <img src="/images/Social-2.png" alt="LinkedIn" loading="lazy" />
          </a>
          <a href="https://share.google/Aq1xNVG9ynQnryXT4" target="_blank" rel="noopener noreferrer">
            <img src="/images/Social-3.png" alt="Google" loading="lazy" />
          </a>
          <a href="https://ca.pinterest.com/TKB_Group/" target="_blank" rel="noopener noreferrer">
            <img src="/images/Social-4.png" alt="Pinterest" loading="lazy" />
          </a>
        </div>
      </div>
    </footer>
  );
}