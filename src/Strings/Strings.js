/*
* Constant to store strings.
* Level [0][0] is general strings to be used anywhere;
* level[0][1] is strings for buttons.
* Example in code: {strings[0][1].message} will display 'I Am a Full Stack Developer'
*/
const strings = [
  [//[0]Normal Strings
    {name: 'subtitle1', type: 'message', message: 'Hi! My name is Miguel Furtado', menu: 'SliderItem' },
    {name: 'subtitle2', type: 'message', message: 'I Am a Full Stack Developer', menu: 'SliderItem'},
    {name: 'subtitle3', type: 'message', message: 'I have developed a few things!', menu: 'SliderItem'},
  ],
  [//[1]Button Strings
    {name: 'LearnMore', type: 'button', message: 'Learn More'},
    {name: 'Home', type: 'button', message: 'Home'},
    {name: 'About', type: 'button', message: 'About'},
    {name: 'Portfolio', type: 'button', message: 'Portfolio'},
    {name: 'Resume', type: 'button', message: 'Resume'},
  ],

];

export default strings;
