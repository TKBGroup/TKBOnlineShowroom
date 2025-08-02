import Head from 'next/head';
import Navbar from '../components/Navbar'; 
import Testimonials from '../components/Testimonials'; 
import AboutUs from '../components/AboutUs'; 
import Footer from '../components/Footer';  
 
import styles from '../styles/Willow.module.css';
 
import willowButtonStyles from '../styles/WillowButtonStyles.module.css';

export default function WillowVanity() {
  return (
    <>
      <Head>
        <title>Willow Vanity</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />
      <div className={styles.overlay}></div>

      {/* Hero Section */}
      <div className={styles.hero}>
        <img src="/images/willow/hero_vanity.png" alt="Willow Vanity" />
      </div>

      {/* Description Section */}
      <div className={styles['description-span']}>
        <img className={styles['curved-quote']} src="/images/willow/timeless_caption.png" alt="Timeless Caption" />
        <div className={styles.description}>
          <div className={styles['first-description']}>
            <div className={styles.captions}>
              <h3>ELEVATED DESIGN</h3>
              <p>The Willow Vanity blends the warmth of natural textures with crisp, contemporary lines. Designed to bring effortless elegance to any bathroom, it offers a perfect balance between functionality and style.</p>
            </div>
            <img src="/images/willow/mirror_part.png" alt="Mirror Part" />
          </div>

          <div className={styles['second-description']}>
            <div className={styles.captions}>
              <h3>NATURAL SIMPLICITY</h3>
              <p>Its handle-free design highlights modern minimalism, with the option to add matte black or brushed nickel handles for a custom look. Topped with a matte white solid-surface countertop and integrated sink, this vanity combines organic beauty with sleek, contemporary simplicity.</p>
            </div>
            <img src="/images/willow/side.png" alt="Side View" />
          </div>
        </div>
      </div>

      {/* Info Container Section */}
      <div className={styles['info-container']}>
        <div>
          <div className={`${styles.title} ${styles['info-subsection']}`}>
            <h1><span>FLOATING</span><br />BATHROOM<br />VANITY</h1>
          </div>
          <div className={styles['info-subsection']}>
            <img src="/images/willow/vanity-diagram.png" alt="Vanity Diagram" className={styles['spec-image']} />
          </div>
          <div className={`${styles['info-subsection']} ${styles.structure}`}>
            <h3>Structure</h3>
            <p>Solid Wood Frame,<br />Moisture-Resistant MDF Panels</p>
          </div>
          <div className={`${styles['info-subsection']} ${styles['contact-info']}`}>
            <p><strong>Website:</strong><br />tkbgroupdesigns.com</p>
            <p><strong>Contact:</strong><br />info@tkbmillwork.com<br />+1 555 123 4567</p>
            <p>Sustainable Cabinetry |<br /> Proudly Crafted in Canada</p>
            <p><strong>by TKB Group</strong></p>
          </div>
        </div>
        <div className={styles['right-column']}>
          <div className={styles['info-subsection']}>
            <h3>Product Sheet</h3>
            <p>Floating Bathroom Vanity</p>
          </div>
          <div className={styles['info-subsection']}>
            <h3>General dimensions</h3>
            <ul>
              <li>Height: 23 ⅝″ (including top)</li>
              <li>Depth: 18 ⅜″</li>
              <li>Width: 59″</li>
              <li>Countertop Height: 4″</li>
              <li>Mirror Height: 29 ⅝″</li>
              <li>Mirror Depth: 5 ½″</li>
              <li>Mirror Width: 58⅛″</li>
            </ul>
          </div>
          <div className={styles['info-subsection']}>
            <h3>Top Material</h3>
            <p>Prepped for stone slab (quartz)</p>
          </div>
          <div className={styles['info-subsection']}>
            <h3>Cabinetry Finishes</h3>
            <div className={styles.cabinetry}>
              <div>
                <img src="/images/willow/finish-oak.png" alt="Natural Oak" />
                <p>Natural Oak</p>
              </div>
              <div>
                <img src="/images/willow/finish-white.png" alt="Quartz 1141" />
                <p>Quartz<br />1141 Pure White</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Design Section */}
      <div className={styles.design}>
        <div className={styles['image-description']}>
          <h3><strong>WILLOW</strong><br /></h3>
          <div className={styles['description-group']}>
            <p>NATURAL<br />WOOD FINISH</p>
            <img src="/images/willow/description-oval-1.png" alt="Oval 1" />
          </div>
          <div className={`${styles['description-group']} ${styles['middle-group']}`}>
            <p>WHITE<br />INTEGRATED SINK</p>
            <img src="/images/willow/description-oval-2.png" alt="Oval 2" />
          </div>
          <div className={styles['description-group']}>
            <p>WALL-MOUNTED<br />MINIMALIST<br />DESIGN</p>
            <img src="/images/willow/description-oval-3.png" alt="Oval 3" />
          </div>
        </div>
        <div className={styles['right-image']}>
          <div className={styles.colors}>
            <div className={styles['color-white']}></div>
            <div className={styles['color-brown']}></div>
            <div className={styles['color-oak']}></div>
          </div>
          <img src="/images/willow/interior.png" alt="Interior View" />
        </div>
      </div>

      <Testimonials />
      <AboutUs buttonStyle={willowButtonStyles} /> 
    </>
  );
}