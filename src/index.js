import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Blog from "./components/Blog";
import ResponsiveAppBar from "./components/AppBarResponsive";
import ButtonAppBar from "./components/BasicAppBar";

// import menuSections from './components/TopMenuSettings';
const menuSections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
    console.log(isLoggedIn)
  };
  const getLoginState = () => {
    return isLoggedIn;
  };
// const theme = createTheme();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/*<Blog />*/}
      <ResponsiveAppBar topNavBarTitle={'My site'} topNavBarSections={menuSections} loginHandler={handleLoginClick} loginState={getLoginState}/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
