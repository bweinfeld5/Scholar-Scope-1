// pages/_app.js or components/Layout.js
import '../styles/globals.css'; // Ensure global styles are imported
import '../styles/About.module.css'; // Import the module stylesheet if needed

function MyApp({ Component, pageProps }) {
    return (
        <div className="body-class">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
