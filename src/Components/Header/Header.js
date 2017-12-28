import React, { Component } from 'react';
import styles from './HeaderStyles.js';
import strings from '../../Strings/Strings.js';

export default class Header extends Component {
      constructor(props){
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);

        this.state = {
          isHovering: false,
        }

      }

      handleMouseHover(){
        this.setState(this.toggleHoverState);
      }

      toggleHoverState(state){
        return {
          isHovering: !state.isHovering,
        }
      }


  render() {
    return (
      <div style={ styles.headerContainer }>
        <div style={ styles.logoContainer }>
          <h1 style={ styles.logo } >{ strings[1][5].message }</h1>
        </div>
        <div style={ styles.navContainer }>
          <p style={ styles.navButtons }>{ strings[1][1].message }</p>
          <p style={ styles.navButtons }>{ strings[1][2].message }</p>

            <div class="dropdown">
              <p onMouseEnter={this.handleMouseHover}
                 onMouseLeave={this.handleMouseHover}
                 style={ styles.navButtons }>{ strings[1][3].message }</p>

                 {this.state.isHovering &&
                   <div class="dropdownContentMain">
                     <a href="#" style={ styles.dropdownContent }>Personal Projects</a>
                     <a href="#" style={ styles.dropdownContent }>Academic Projects</a>
                     <a href="#" style={ styles.dropdownContent }>Professional Projects</a>
                   </div>
                 }

            </div>

          <p style={ styles.navButtons }>{ strings[1][4].message }</p>
        </div>
      </div>
    );
  }
}
