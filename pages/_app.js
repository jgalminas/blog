import '../styles/styles.css'
import { ThemeProvider } from '../components/contexts/ThemeContext.js';
import cookie from 'cookie-cutter';

export default function MyApp({ Component, pageProps, props }) {
  
  console.log(props);

  return (
      <ThemeProvider>
      <Component {...pageProps} />
      </ThemeProvider>
  )
}

export async function getInitialProps(context) {
  return {
    props : {
      it: "asdas"
    }
  }
}