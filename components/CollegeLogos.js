import styles from '../styles/Home.module.css';

const logos = [
  '/public/Logos/BClogo.png',
  '/public/Logos/Emorylogo.png',
  '/https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wake_Forest_University_Athletic_logo.svg/2560px-Wake_Forest_University_Athletic_logo.svg.png',
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