import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import Detail from '../components/Detail';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    alignSelf: 'center'
  },
  text: {
    fontSize: 18,
    marginVertical: 5
  }
});

class DetailScreen extends Component {
	
	




	render() {
		const { item } = this.props.navigation.state.params;
		return(
			<Detail item={item}/>
		)
	}
}


DetailScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.item.name
});



export default DetailScreen