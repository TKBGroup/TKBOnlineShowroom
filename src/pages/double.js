import Head from 'next/head';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials'; 
import styles from '../styles/Double.module.css';
import AboutUs from '../components/AboutUs'; 

import DoubleButtonStyles from '../styles/DoubleButtonStyles.module.css';

export default function DoubleVanity() {
    return (
        <div>
            <div className={styles.container}>
                <Head>
                    <title>Double Vanity</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="styles.css" /> {/* This is for global styles */}
                </Head>

                <Navbar />
                <div className={styles.overlay}></div>

                <div className={styles.hero}>
                    <img className={styles.mirror} src="/images/double/hero_vanity1.png" loading="lazy" alt="Vanity mirror" />
                    <img className={styles.vanity} src="/images/double/hero_vanity2.png" loading="lazy" alt="Double vanity" />
                </div>

                <div className={styles['description-span']}>
                    <img className={styles['curved-quote']} src="/images/double/timeless_caption.png" alt="Timeless caption" loading="lazy" style={{ maxWidth: '793px' }} />
                    <div className={styles.description}>
                        <div className={styles['first-description']}>
                            <div className={styles.captions}>
                                <h3>MEET VISTA VANITY</h3>
                                <p>– A contemporary double-sink vanity bringing comfort, clarity, and symmetry to your shared bathroom. With
                                    a smart blend of drawer-heavy storage and soft-close cabinets, it’s built for couples, families, and those
                                    who value intentional space.</p>
                            </div>
                            <img src="/images/double/mirror_part.png" alt="Vanity mirror section" style={{ maxWidth: '434px' }} loading="lazy" />
                        </div>
                        <div className={styles['second-description']}>
                            <div className={styles.captions}>
                                <h3>PERFECT FOR:</h3>
                                <p>– Shared primary bathrooms</p>
                                <p>– Couples who want harmony (and personal drawer zones)</p>
                                <p>– Perfect for busy mornings without clutter or chaos</p>
                                <p>– Adds hotel-like luxury and function to everyday life</p>
                                <p>– Designed to keep personal care items perfectly organized</p>
                            </div>
                            <img src="/images/double/side.png" alt="Vanity side view" style={{ maxWidth: '521px' }} loading="lazy" />
                        </div>
                    </div>
                </div>

                <div className={styles['info-container']}>
                    <div>
                        <div className={`${styles.title} ${styles['info-subsection']}`}>
                            <h1><span>FLOATING</span><br />BATHROOM<br />VANITY</h1>
                        </div>
                        <div className={styles['info-subsection']}>
                            <img src="/images/double/vanity-diagram.png" alt="Vanity Diagram" className={styles['spec-image']} loading="lazy" />
                        </div>
                        <div className={`${styles['info-subsection']} ${styles.structure}`}>
                            <h3>Structure:</h3>
                            <p>Solid Wood Frame,<br />Moisture-Resistant MDF Panels,<br />Soft-Close Drawers & Door,<br />Legs with Stainless
                                Steel Base Caps,<br />Engineered for Everyday Use</p>
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
                            <p>Vista Vanity - Double Vanity | Standing | Symmetrical | Elegant Functionality</p>
                        </div>
                        <div className={styles['info-subsection']}>
                            <h3>General dimensions</h3>
                            <ul>
                                <li>Height: 35 ¾″ (including top)</li>
                                <li>Depth: 20 ⅜″</li>
                                <li>Width: 80 ⅜″</li>
                                <li>Countertop Height: ¾″</li>
                                <li>Mirror Height: 29 ⅝″</li>
                                <li>Mirror Depth: 5 ½″</li>
                                <li>Mirror Width: 78 ¾″</li>
                            </ul>
                        </div>
                        <div className={styles['info-subsection']}>
                            <h3>Top Material</h3>
                            <p>Premium Quartz Slab (included)<br />Finish: 1141 Pure White,<br />Two undermount sinks pre-installed</p>
                        </div>
                        <div className={styles['info-subsection']}>
                            <h3>Cabinetry Finishes</h3>
                            <div className={styles.cabinetry}>
                                <div>
                                    <img src="/images/double/finish1.png" alt="Natural Oak" loading="lazy" />
                                    <p>Polished Chrome</p>
                                </div>
                                <div>
                                    <img src="/images/double/finish2.png" alt="Quartz 1141" loading="lazy" />
                                    <p>Quartz<br />1141 Pure White</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.design}>
                    <h3><strong>DOUBLE</strong><br /></h3>
                    <span className={styles['design-mobile-group']}>
                        <div className={styles['image-description']}>
                            <h3><strong>DOUBLE</strong><br /></h3>
                            <div className={styles['description-group']}>
                                <p>NATURAL<br />WOOD FINISH</p>
                                <img src="/images/double/description-oval-1.png" loading="lazy" alt="Wood finish" />
                            </div>
                            <div className={`${styles['description-group']} ${styles['middle-group']}`}>
                                <p>WHITE<br />INTEGRATED SINK</p>
                                <img src="/images/double/description-oval-2.png" loading="lazy" alt="Integrated sink" />
                            </div>
                            <div className={styles['description-group']}>
                                <p>WALL-MOUNTED<br />MINIMALIST<br />DESIGN</p>
                                <img src="/images/double/description-oval-3.png" loading="lazy" alt="Wall-mounted design" />
                            </div>
                        </div>
                        <div className={styles['right-image']}>
                            <div className={styles.colors}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <img src="/images/double/interior.png" loading="lazy" alt="Interior view" />
                        </div>
                    </span>
                    <div className={styles['mobile-image-description']}>
                        <div className={styles['description-group']}>
                            <p>NATURAL<br />WOOD FINISH</p>
                            <img src="/images/double/description-oval-1-cut.png" loading="lazy" alt="Wood finish" />
                        </div>
                        <div className={`${styles['description-group']} ${styles['middle-group']}`}>
                            <p>WHITE<br />INTEGRATED SINK</p>
                            <img src="/images/double/description-oval-2-cut.png" loading="lazy" alt="Integrated sink" />
                        </div>
                        <div className={styles['description-group']}>
                            <p>WALL-MOUNTED<br />MINIMALIST<br />DESIGN</p>
                            <img src="/images/double/description-oval-3-cut.png" loading="lazy" alt="Wall-mounted design" />
                        </div>
                    </div>
                </div>

                <Testimonials />

                <AboutUs buttonStyle={DoubleButtonStyles} /> 
            </div>
        </div>
    );
}