// components/NavBar.js
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                {/* Add more links as needed */}
            </ul>
        </nav>
    );
};

export default NavBar;
