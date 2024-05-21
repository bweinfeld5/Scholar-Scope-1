import styles from '../styles/Home.module.css';

const logos = [
  '/public/Logos/BClogo.png',
  '/public/Logos/Emorylogo.png',
  '/public/Logos/Wakelogo.png',
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
        style={{ animationDelay: `${index * 2}s` }}
      />
    ))}
  </div>
);

export default CollegeLogos;