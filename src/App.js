// import logo from './logo.svg';
import React from 'react';

// % Styles
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import './env.config';
import './App.css';

// ^ Material-ui Components(Functions)
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import materialUIpalette from '../src/theme/palette';

// ^ Plugins
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './assets/scss/index.scss';
import Routes from './Routes';

const browserHistory = createBrowserHistory();

function App() {

  // 創建自定義的設定
  const theme = createMuiTheme({
    // ! 非原生寫法的 breakpoints 寫法，定義一個數值可以取用
    bp: {
      laptop: 1024,
      largeAlpha: 1280
    },
    // ! 一定要用 [] 包才吃得到，所有 .Materialui- 相關的 class 設定
    typography: {
      body1: {
        fontSize: [14]
      },
      body2: {
        fontSize: [14]
      }
    },
    palette: {
      primary: {
        main: materialUIpalette.themePrimary
      },
      secondary: {
        main: materialUIpalette.themePrimary
      },
      text: {
        white: materialUIpalette.white,
        black: materialUIpalette.black,
        neutralPrimary: materialUIpalette.neutralPrimary
      },
      customColor: { ...materialUIpalette }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </ThemeProvider>
  );
}

export default App;
