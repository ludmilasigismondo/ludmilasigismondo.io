// core
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// custom components
import { Header } from './components/ui';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// views
import * as Views from './views'
// styles
import './App.css';

export const App = () =>
  <Router>
    <Header />
    <Navbar />

    <Switch>
      <Route path="/" exact component={ Views.PixelArt } />
      <Route path="/paintings/pixel-art" component={ Views.PixelArt } />
      <Route path="/paintings/portraits" component={ Views.OilPortraits } />
      <Route path="/drawings" component={ Views.WatercolorPortraits } />
      <Route path="/illustrations" component={ Views.Illustrations } />
      <Route path="/about" component={ Views.About } />
      <Route component={ Views.NoMatch } />
    </Switch>

    <Footer />
  </Router>