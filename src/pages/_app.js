/** Uncomment the below codeblock if you want to add google analytics for more info please visit our docs analytics section */

import 'rc-drawer/assets/index.css';
import 'assets/css/react-slick.css';
import Layout from 'components/layout';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import './../../src/theme/global.css'
export default function CustomApp({ Component, pageProps,router }) {
  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  return  <ThemeProvider theme={theme}>  <Layout>   <Component {...pageProps} /></Layout>   </ThemeProvider>;
}
