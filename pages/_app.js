import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
// pages/_app.js
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
