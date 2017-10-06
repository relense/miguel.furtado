import React, { Component } from 'react';
import styles from './HeaderStyles.js';
import strings from '../../Strings/Strings.js';

export default class Header extends Component {


  render() {
    return (
      <div style={ styles.headerContainer }>
        <div style={ styles.navContainer }>
          <p style={ styles.navButtons }>{ strings[1][1].message }</p>
          <p style={ styles.navButtons }>{ strings[1][2].message }</p>
          <p style={ styles.navButtons }>{ strings[1][3].message }</p>
          <p style={ styles.navButtons }>{ strings[1][4].message }</p>
        </div>
      </div>
    );
  }
}
