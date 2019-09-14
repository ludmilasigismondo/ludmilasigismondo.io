// core
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
// custom components
import { Header } from './components/ui';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
// utils
import { ScrollToTop } from './utils';
// views
import * as Views from './views';
// styles
import './App.css';

const NavbarWithRouter = withRouter(Navbar);

export const App = () => (
  <Router>
    <ScrollToTop>
      <Header />
      <NavbarWithRouter />

      <Switch>
        <Route exact path="/" component={ Views.Home } />
        <Route exact path="/paintings/pixel-art" component={ Views.PixelArt } />
        <Route exact path="/paintings/portraits" component={ Views.OilPortraits } />
        <Route exact path="/drawings" component={ Views.WatercolorPortraits } />
        <Route exact path="/illustrations" component={ Views.Illustrations } />
        <Route exact path="/about" component={ Views.About } />
        <Route component={ Views.NoMatch } />
      </Switch>

      <Footer />
    </ScrollToTop>
  </Router>
)