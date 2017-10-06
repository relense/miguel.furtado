import React, { Component } from 'react';
import styles from './SliderItemStyles.js';
import strings from '../../Strings/Strings.js';

export default class SliderItem extends Component {


  render() {
    return (
      <div style={ styles.menuContainer }>
          <h1 style={ styles.title }>{ strings[0][0].message }</h1>
          <h1 style={ styles.title }>{ strings[0][1].message }</h1>
        <button style={ styles.learnButton }>{ strings[1][0].message }</button>
      </div>
    );
  }
}
