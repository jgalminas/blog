import '../styles/styles.css'
import { ThemeProvider } from '../components/contexts/ThemeContext.js';

function MyApp({ Component, pageProps }) {
  
  return (
      <ThemeProvider>
      <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
