import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        {/* script for pre-loading theme settings */}
        <script dangerouslySetInnerHTML={{
            __html: `
            (() => {
        
                const theme = window.localStorage.getItem('theme_settings');
                const classList = document.documentElement.classList;
            
                if (theme === 'true') {
                    classList.add('theme-dark');
                }  else {
                    classList.add('theme-light');
                }
        
            })();
        `
        }}></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}