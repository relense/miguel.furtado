import React, { Component } from 'react';
import styles from './HomeStyles.js';
import SliderItem from '../../Components/SliderItems/SliderItem.js';
import Header from '../../Components/Header/Header.js';
import '../../index.css';

export default class App extends Component {
  render() {
    return (
      <div style={styles.mainContainer}>
        <Header />
        <div style={styles.mainContentContainer}>
        <SliderItem />
        </div>
      </div>
    );
  }
}
