import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: 'rgb(41,48,70)',
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1
  },
  title: {
    fontSize: 30,
    color: '#fff',
    lineHeight: 100
  },
  toUs: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 40
  },
  avatar: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  inputContainer: {
    borderColor: 'rgb(90, 100, 143)',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 20
  },
  inputIcon: {
    color: 'rgb(90, 100, 143)',
    marginRight: 10
  }
})

export default styles
