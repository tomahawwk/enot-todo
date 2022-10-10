import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

// Styles 
import './assets/styles/normalize.css'
import './assets/styles/animate.css'
import './assets/styles/fonts.css'

import {createGlobalStyle, ThemeProvider} from 'styled-components'

const theme = {
  colors: {
    black: "#121212",
    grey: "#222222",
    orange: "#ff5e00",
    white: "#F4F4F4",
    greyDark: "#1e1e1e",
    lightGrey: "#A9A9A9"
  },
  screen: {
    tablet: "1100px"
  },
  fonts: {
    primary: "Actor",
    secondary: "Roboto"
  },
  transition: {
    duration: ".4s",
    function: "cubic-bezier(.165,.84,.44,1)",
  }
}

const Global = createGlobalStyle`
  body {
    font-family: ${theme.fonts.secondary};
    font-weight: 400;
    background: ${theme.colors.black};
    color: white;
    padding: 30px;
    @media (max-width: ${theme.screen.tablet}){
      padding: 0;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const rootElement = document.getElementById('root');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

if(rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  );
}