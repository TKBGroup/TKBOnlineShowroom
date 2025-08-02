import { useEffect } from 'react';
import styles from '../styles/Testimonials.module.css';

export default function Testimonials() {
  const originalTestimonialLinks = [
    "https://maps.app.goo.gl/H3kg6WBqCQjEEAsa6",
    "https://maps.app.goo.gl/NzfWySSVR6c9wPZc7",
    "https://maps.app.goo.gl/gF2hPpzcNzQjhzTZ8"
  ];
  const desktopUniversalLink = "https://www.google.com/search?q=TKB+Cabinetry+North+York+review";
  const leaveReviewMobileTabletLink = "https://g.page/r/CfKPMDzHyXDxEAI/review";

  useEffect(() => {
    const applyResponsiveStyles = () => {
      const currentWidth = window.innerWidth;
      const testimonialLinks = document.querySelectorAll(`.${styles.testimonialCard} .${styles.testimonialLink}`);
      const leaveReviewButton = document.getElementById(styles.leaveReviewButton);

      if (currentWidth > 976) {
        // Desktop Styles
        testimonialLinks.forEach(link => {
          link.href = desktopUniversalLink;
          link.style.display = 'none';
        });
        leaveReviewButton.href = desktopUniversalLink;
        leaveReviewButton.style.display = 'none';
      } else {
        // Mobile & Tablet Styles
        testimonialLinks.forEach((link, index) => {
          link.href = originalTestimonialLinks[index];
          link.style.display = 'inline-block';
        });
        leaveReviewButton.href = leaveReviewMobileTabletLink;
        leaveReviewButton.style.display = 'inline-block';
      }
    };

    applyResponsiveStyles();
    window.addEventListener('resize', applyResponsiveStyles);

    return () => window.removeEventListener('resize', applyResponsiveStyles);
  }, []);

  // Using CSS Modules and dynamic class names
  // This approach is cleaner than inline styles in React
  // The CSS file for this component will contain the responsive rules
  // as media queries, which is a better practice.
  return (
    <div className={styles.reviews}>
      <div id={styles.mainContainer}>
        <div id={styles.desktopLayoutWrapper}>
          <div id={styles.qrSection}>
            <div id={styles.qrBackgroundWrapper}>
              <img src="https://i.postimg.cc/q7ywLc4M/qr.png" alt="QR Code" loading="lazy" />
            </div>
            <h2>Scan to explore reviews</h2>
            <p>or leave your own feedback.</p>
          </div>

          <div id={styles.mainContentSection}>
            <h2 id={styles.mainHeading}>
              Read reviews, <br />
              <span>build with confidence.</span>
            </h2>

            <a href="https://g.co/kgs/Tz7GyaX" target="_blank" rel="noopener noreferrer">
              <div id={styles.ratingInfo}>
                <div id={styles.ratingScoreStars}>
                  <span id={styles.scoreText}>4.4/5</span>
                  <img id={styles.starsVisualImg} src="https://i.postimg.cc/hjLRkhn3/4k-stars.png" alt="Star Rating" loading="lazy" />
                </div>
                <div id={styles.ratingSource}>
                  <span id={styles.onGoogleText}>on Google</span>
                  <img id={styles.googleLogo} src="https://i.postimg.cc/50qDPG5h/4k-google-logo.png" alt="Google Logo" loading="lazy" />
                </div>
              </div>
            </a>

            <div id={styles.testimonialsRow}>
              {/* Testimonial Cards */}
              <div className={styles.testimonialCard}>
                <h3 className={styles.reviewerName}>Mary De Pompa</h3>
                <div style={{ color: 'gold', fontSize: '20px', marginBottom: '10px' }}>★★★★★</div>
                <p>We had a very positive experience with designing, manufacturing and installation of our kitchen...</p>
                <a className={styles.testimonialLink} href="" target="_blank" rel="noopener noreferrer">View on Google</a>
              </div>

              <div className={styles.testimonialCard}>
                <h3 className={styles.reviewerName}>Karen Greve Young</h3>
                <div style={{ color: 'gold', fontSize: '20px', marginBottom: '10px' }}>★★★★★</div>
                <p>We are so grateful to Jose and the amazing TKB Cabinetry team for our newly revitalized home...</p>
                <a className={styles.testimonialLink} href="" target="_blank" rel="noopener noreferrer">View on Google</a>
              </div>

              <div className={styles.testimonialCard}>
                <h3 className={styles.reviewerName}>Courtney Gagne</h3>
                <div style={{ color: 'gold', fontSize: '20px', marginBottom: '10px' }}>★★★★★</div>
                <p>Jose and his team were extremely professional, helpful and knowledgeable...</p>
                <a className={styles.testimonialLink} href="" target="_blank" rel="noopener noreferrer">View on Google</a>
              </div>
            </div>
          </div>
        </div>
        <a id={styles.leaveReviewButton} href="" target="_blank" rel="noopener noreferrer">Leave Us a Review</a>
      </div>
    </div>
  );
}