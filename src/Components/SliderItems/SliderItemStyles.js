

const styles = {

  MainMenuContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    border: 'solid 10',

  },

  menuContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    border: 'solid 10',
  },

  title: {
    width: '80vw',
    fontSize: 47,
    textAlign: 'center',
    margin: 10,
    letterSpacing: 2,
    fontFamily: 'Sans-Serif',
  },

  learnButton: {
    display: 'inline-block',
  	textTransform: 'uppercase',
  	letterSpacing: 2,
  	fontSize: 14,
  	padding: '15px 45px',
  	borderRadius: 5,
  	MozBorderRadius: 5,
  	WebkitBorderRadius: 5,
  	border: '1px solid rgba(0,0,0,0.3)',
  	borderBottomWidth: 3,
    backgroundColor: '#699DB6',
	  borderColor: 'rgba(0,0,0,0.3)',
	  textShadow: '0 1px 0 rgba(0,0,0,0.5)',
	  color: '#FFF',
    marginTop: 20
  },

  learnButtonHover: {
    backgroundColor: '#e3e3e3',
		borderColor: 'rgba(0,0,0,0.5)',
  },

  learnButtonPress: {
    backgroundColor: '#CCC',
		borderColor: 'rgba(0,0,0,0.9)',
  },

  arrowButtons: {
    margin: 20,
  },

  emptyDiv: {
    height: 42,
    width: 42,
    margin: 20,
  }
};

export default styles;
