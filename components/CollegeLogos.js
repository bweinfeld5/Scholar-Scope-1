// components/CollegeLogos.js
import styles from '../styles/Home.module.css';

const logos = [
  '/logos/BClogo.png',
  '/logos/Emorylogo.png',
  '/logos/Wakelogo.png', 
    // Add the path to the new logo
  // Add paths to other college logos here
];

const CollegeLogos = () => (
    <div className={styles.logos}>
      <div className={styles.scroll}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`College Logo ${index + 1}`}  // Update alt text as needed
            className={styles.logo}
          />
        ))}
        {/* Duplicate the logos for seamless scrolling */}
        {logos.map((logo, index) => (
          <img
            key={`${index}-duplicate`}
            src={logo}
            alt={`College Logo Duplicate ${index + 1}`}  // Update alt text as needed
            className={styles.logo}
          />
        ))}
      </div>
    </div>
  );
  
  export default CollegeLogos;


