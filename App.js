import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';


StatusBar.setBarStyle('light-content');

//setting the header bars for all screens.
export default StackNavigator({
  Contacts: ListScreen,
  Detail: DetailScreen
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#2a3daa'
    },
    headerTintColor: '#FFF'
  }
});
