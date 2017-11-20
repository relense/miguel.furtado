const styles = {

  headerContainer: {
    height: 50,
    width: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: '#699DB6',
  },

  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
  },

  navButtons: {
    margin: 20,
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 12,
    color: '#fff'
  },

  navButtons3: {
    margin: 18,
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 12,
    color: '#fff'
  },

  logoContainer: {
    display: 'flex',
    position: 'fixed',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 20,
    height: 50,
    alignItems: 'center'
  },

  logo: {
    color: '#fff',
    cursor: 'pointer'
  },

  dropdown: {
    position: 'relative',
    display: 'inlineBlock',
  },

  dropdownContentMain: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#699DB6',
    minWidth: 160,
    boxShadow: '0 8 16 0 rgba(0,0,0,0.2)',
    zIndex: 1,
},

dropdownContent: {
    color: 'white',
    padding: 10,
    textDecoration: 'none',
    display: 'block',
    border: '1px solid white',
    backgroundColor: '#699DB6',
}

};

export default styles;
