import React, { Component } from 'react';
import styles from './SliderItemStyles.js';
import strings from '../../Strings/Strings.js';

export default class SliderItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
    this.changeIndex = this.changeIndex.bind(this);
    this.changeSliderItem = this.changeSliderItem.bind(this);
  }

  changeSliderItem() {
    if(this.state.index === 0) {
      return (
        <div  style={ styles.menuContainer }>
            <h1 style={ styles.title }>{ strings[0][0].message }</h1>
            <h1 style={ styles.title }>{ strings[0][1].message }</h1>
          <button style={ styles.learnButton }>{ strings[1][0].message }</button>
        </div>
      );

    } else if(this.state.index === 1) {
      return (
        <div style={ styles.menuContainer }>
            <h1 style={ styles.title }>{ strings[0][2].message }</h1>
          <button style={ styles.learnButton }>{ strings[1][0].message }</button>
        </div>
      );
    }
  }

  changeIndex(type) {

    let currentIndex;

    if(this.state.index >= 0 || this.state.index <= 1){
      if(type == 'add') {
        currentIndex = this.state.index + 1;
        this.setState({
          index: currentIndex++,
        });

      } else if (type === 'subtract'){
        currentIndex = this.state.index - 1;
        this.setState({
          index: currentIndex++,
        });

      } else {
        return;
       }
    }
  }

  render() {
    let items = this.changeSliderItem();
    return (
      <div style={ styles.MainMenuContainer }>
        { items }
        <button style={ styles.arrowRight } onClick={() => { this.changeIndex('add') } }>
        RIGHT
        </button>
        <button style={ styles.arrowLeft } onClick={() => { this.changeIndex('subtract') }}>
        LEFT
        </button>
      </div>
     );
  }
}
