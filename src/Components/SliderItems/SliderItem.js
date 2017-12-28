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
        <div style={ styles.menuContainer }>
            <h1 style={ styles.title }>{ strings[0][0].message }</h1>
            <h1 style={ styles.title }>{ strings[0][1].message }</h1>
            <h1 style={ styles.title }>{ strings[0][5].message }</h1>
            <h1 style={ styles.title }>{ strings[0][6].message }</h1>
          {/*<button style={ styles.learnButton }>{ strings[1][0].message }</button>
          <div style={{backgroundColor: 'black', width: 700, height: 150, alignSelf: 'center', marginTop: 15, border: "1px solid #7F7E7E "}}>
          <input
                style={{height: 25, width: 700, backgroundColor: 'transparent', color: 'white', border: "0px solid", outline: 'none', marginLeft: 2}}
                placeholder="Check the developer details. EX: developer.age" type="text"
                onChangeText={(text) => this.setState({text})}/>
          </div>
          */}
        </div>
      );

    } else if(this.state.index === 1) {
      return (
        <div style={ styles.menuContainer }>
            <h1 style={ styles.title }>{ strings[0][2].message }</h1>
            <h1 style={ styles.title }>{ strings[0][3].message }</h1>
            <button style={ styles.learnButton }>{ strings[1][0].message }</button>
        </div>
      );
    } else if(this.state.index === 2) {
      return(
        <div style={ styles.menuContainer }>
            <h1 style={ styles.title }>{ strings[0][4].message }</h1>
          <button style={ styles.learnButton }>{ strings[1][0].message }</button>
        </div>
      );
    }
  }

  changeIndex(type) {

    let currentIndex;

      if(type === 'add') {
        currentIndex = (this.state.index >= 0 && this.state.index < 2) ? this.state.index + 1 : this.state.index;
        this.setState({
          index: currentIndex,
        });

      } else if (type === 'subtract'){
        currentIndex = (this.state.index <= 2 && this.state.index > 0) ? this.state.index - 1 : this.state.index;
        this.setState({
          index: currentIndex,
        });

      } else {
        return;
       }
  }

  render() {
    let items = this.changeSliderItem();
    return (
      <div style={ styles.MainMenuContainer }>
        {this.state.index > 0 &&
          <img src={require("../../Images/left.png")} alt={""} style={styles.arrowButtons} height={42} width={42} onClick={() => { this.changeIndex('subtract') } }/>
        }
        {this.state.index === 0 &&
          <div style={ styles.emptyDiv }/>
        }
          { items }
        {this.state.index < 2 &&
          <img src={require("../../Images/right.png")} alt={""} style={styles.arrowButtons} height={42} width={42} onClick={() => { this.changeIndex('add') } }/>
        }
        {this.state.index === 2 &&
          <div style={ styles.emptyDiv }/>
        }
      </div>
     );
  }
}
