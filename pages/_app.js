import '../styles/styles.css'
import { ThemeProvider } from '../components/contexts/ThemeContext.js';

export default function App({ Component, pageProps }) {
  
  return (
      <ThemeProvider>
      <Component {...pageProps}/>
      </ThemeProvider>
  )
}