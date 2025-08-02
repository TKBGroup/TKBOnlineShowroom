// import styles from '../styles/AboutUs.module.css';

// const AboutUs = ({ buttonStyle }) => {
//   return (
//     <div className={styles['about-us']}>
//       <h3>Explore More From TKB</h3>
//       <div className={styles.buttons}>
//         <div className={buttonStyle.style1}>
//           <a href="https://tkbgroupdesigns.com/services" target="_blank" rel="noopener noreferrer">See More</a>
//         </div>
//         <div className={buttonStyle.style2}>
//           <a href="https://tkbgroupdesigns.com" target="_blank" rel="noopener noreferrer">Our Website</a>
//         </div>
//         <div className={buttonStyle.style1}>
//           <a href="https://tkbgroupdesigns.com/#:~:text=Get%20directions-,Contact%20Us,-Tell%20Us%20About" target="_blank" rel="noopener noreferrer">Get a Quote</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import styles from '../styles/AboutUs.module.css';

const AboutUs = ({ buttonStyle }) => {
  return (
    <div className={styles['about-us']}>
      <h3 className={buttonStyle['heading']}>Explore More From TKB</h3>
      <div className={styles.buttons}>
        <div className={buttonStyle.style1}>
          <a href="https://tkbgroupdesigns.com/services" target="_blank" rel="noopener noreferrer">See More</a>
        </div>
        <div className={buttonStyle.style2}>
          <a href="https://tkbgroupdesigns.com" target="_blank" rel="noopener noreferrer">Our Website</a>
        </div>
        <div className={buttonStyle.style1}>
          <a href="https://tkbgroupdesigns.com/#:~:text=Get%20directions-,Contact%20Us,-Tell%20Us%20About" target="_blank" rel="noopener noreferrer">Get a Quote</a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;