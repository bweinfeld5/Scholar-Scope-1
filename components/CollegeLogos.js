// components/CollegeLogos.js
import styles from '../styles/Home.module.css';

const logos = [
  '/logos/college1.png',
  '/logos/college2.png',
  '/logos/college3.png',
  // Add paths to your college logos here
];

const CollegeLogos = () => (
  <div className={styles.logos}>
    {logos.map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt={`College Logo ${index + 1}`}
        className={styles.logo}
        style={{ animationDelay: `${index * 0.5}s` }} // Adjust the delay as needed
      />
    ))}
  </div>
);

export default CollegeLogos;
