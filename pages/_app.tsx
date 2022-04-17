import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          closeOnClick
          pauseOnHover
        />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
