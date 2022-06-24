import '../styles/styles.css'
import { ThemeProvider } from 'next-themes'
import PageLayout from '../layouts/PageLayout';

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ThemeProvider>
      <PageLayout>
        {getLayout(<Component {...pageProps} />)}
      </PageLayout>
    </ThemeProvider>
  );
}