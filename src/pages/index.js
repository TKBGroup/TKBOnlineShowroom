import Head from 'next/head'; 

import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TKB Showroom</title>
        <meta name="description" content="Explore our online showroom for cabinetry, materials, and innovative designs." />
      </Head>

      <div className={styles.hero}>
        <h1>Explore Our Online Showroom</h1>
        <div>Book Your In-Person Visit for Tomorrow</div>
      </div>

      <div className={styles.intro}>
        <div className={styles.description}>
          <div className={styles.leftColumn}>
            <h3>What We Offer.</h3>
            <p>Our showroom showcases a wide range of cabinetry solutions, premium materials, and innovative designs to help you envision your future spaces.</p>
            <div className={styles.thesis}>
              <div className={styles.thesisCellLeft}>
                <h3 className={styles.beautifulH3}>CONVINIENT LOCATION</h3>
                <p>Only 20-25 Minutes from Toronto</p>
              </div>
              <div className={styles.thesisCellRight}>
                <h3 className={styles.beautifulH3}>EASY PARKING</h3>
                <p>On-site, free & convenient</p>
              </div>
              <div className={styles.thesisCellLeft}>
                <h3 className={styles.beautifulH3}>ONE-STOP SOLUTION</h3>
                <p>All services in one place</p>
              </div>
              <div className={styles.thesisCellRight}>
                <h3 className={styles.beautifulH3}>WIDE SELECTION</h3>
                <p>Materials, finishes, and solutions on display</p>
              </div>
            </div>
            <p className={styles.location}>
              <img src="/images/Pin.png" loading="lazy" alt="Pin icon" />North York, ON, Canada
            </p>
          </div>
          <div className={styles.rightColumn}>
            <img src="/images/description-img.png" alt="Description image" />
          </div>
        </div>
        <div className={styles.widgets}>
          {/* Replaced <Link> with <a> tag for the external link */}
          <a href="https://tkbgroupdesigns.com/contact-us" className={styles.widgetCell} target="_blank" rel="noopener noreferrer">
            <img src="/images/call.png" alt="" />
            <p>Book Visit, Contact Us</p>
          </a>
          {/* Replaced <Link> with <a> tag for the external link */}
          <a href="https://tkbgroupdesigns.com" className={styles.widgetCell} target="_blank" rel="noopener noreferrer">
            <img src="/images/pic.png" alt="" />
            <p>View Our Online Gallery</p>
          </a>
          {/* Replaced <Link> with <a> tag for the external link */}
          <a href="https://tkbgroupdesigns.com/contact-us" className={styles.widgetCell} target="_blank" rel="noopener noreferrer">
            <img src="/images/expert.png" alt="" />
            <p>Ask Expert</p>
          </a>
          {/* Replaced <Link> with <a> tag for the external link */}
          <a href="https://tkbgroupdesigns.com" className={styles.widgetCell} target="_blank" rel="noopener noreferrer">
            <img src="/images/location.png" alt="" />
            <p>Visit Us Today</p>
          </a>
        </div>
      </div>

      <Gallery />
      <Testimonials />

      <div className={styles.aboutUs}>
        <h3>Explore More From TKB</h3>
        <div className={styles.buttons}>
          <div className={styles.buttonStyle1}>
            {/* This was already correct */}
            <a href="https://tkbgroupdesigns.com/services" target="_blank" rel="noopener noreferrer">See More</a>
          </div>
          <div className={styles.buttonStyle2}>
            {/* This was already correct */}
            <a href="https://tkbgroupdesigns.com" target="_blank" rel="noopener noreferrer">Our Website</a>
          </div>
          <div className={styles.buttonStyle1}>
            {/* This was already correct */}
            <a href="https://tkbgroupdesigns.com/#:~:text=Get%20directions-,Contact%20Us,-Tell%20Us%20About" target="_blank" rel="noopener noreferrer">Get a Quote</a>
          </div>
        </div>
      </div>
    </div>
  );
}