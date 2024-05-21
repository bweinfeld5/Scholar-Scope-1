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
    {logos.map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt={`College Logo ${index + 1}`}  // Update alt text as needed
        className={styles.logo}
        style={{ animationDelay: `${index * 0.5}s` }}  // Adjust the delay as needed
      />
    ))}
  </div>
);

export default CollegeLogos;