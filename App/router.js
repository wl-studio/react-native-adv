import { createAppContainer, createStackNavigator } from 'react-navigation'
import StartApp from './container/StartApp'
import Login from './container/Login'

const AppNavigator = createStackNavigator(
  {
    StartApp,
    Login
  },
  { swipeEnabled: true, animationEnabled: true, initialRouteName: 'Login' }
)

export default createAppContainer(AppNavigator)
