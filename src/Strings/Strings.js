/*
* Constant to store strings.
* Level [0][0] is general strings to be used anywhere;
* level[0][1] is strings for buttons.
* Example in code: {strings[0][1].message} will display 'I Am a Full Stack Developer'
*/
const strings = [
  [//[0]Normal Strings
    {id: 0, name: 'subtitle1', type: 'message', message: 'String name = "Miguel Furtado";', menu: 'SliderItem1' },
    {id: 1, name: 'subtitle2', type: 'message', message: 'int age = 27;', menu: 'SliderItem1'},
    {id: 2, name: 'subtitle3', type: 'message', message: 'I have developed a few things!', menu: 'SliderItem2'},
    {id: 3, name: 'subtitle4', type: 'message', message: 'With the help of some tools.', menu: 'SliderItem2'},
    {id: 4, name: 'subtitle5', type: 'message', message: 'Academic and Business Career!', menu: 'SliderItem3'},
    {id: 5, name: 'subtitle6', type: 'message', message: 'Degree degree = new Degree("Computer Engineering", "Software Branch"); ', menu: 'SliderItem1'},
    {id: 6, name: 'subtitle7', type: 'message', message: 'FullStackDeveloper developer = new FullStackDeveloper(name, age, degree);', menu: 'SliderItem1'},


  ],
  [//[1]Button Strings
    {id: 0, name: 'LearnMore', type: 'button', message: 'Learn More'},
    {id: 1, name: 'Home', type: 'button', message: 'Home'},
    {id: 2, name: 'About', type: 'button', message: 'About'},
    {id: 3, name: 'Portfolio', type: 'button', message: 'Portfolio'},
    {id: 4, name: 'Resume', type: 'button', message: 'Resume'},
    {id: 5, name: 'logo', type: 'text', message: 'M F'},
  ],

];

export default strings;
