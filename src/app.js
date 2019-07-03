import React from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'react-redux';
import './app.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Counter from './components/Counter/Counter';

/**
 * The App class which contains all elements and renders to page
 */
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
