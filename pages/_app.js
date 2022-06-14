import '../styles/styles.css'
import { ThemeProvider } from '../components/contexts/ThemeContext.js';
import { getCookie } from 'cookies-next';

export default function App({ Component, pageProps, theme }) {
  
  return (
      <ThemeProvider initialTheme={theme}>
      <Component {...pageProps}/>
      </ThemeProvider>
  )
}

App.getInitialProps = async ({ctx}) => {
  
  return {
    theme: getCookie('theme_settings', ctx) || false
  }

}