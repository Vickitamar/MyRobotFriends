import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import contacts from '../contacts.json';
import List from '../components/List';


class ListScreen extends Component {
	constructor(props) {
		super(props);
		this.navigateToDetail = this.navigateToDetail.bind(this);

	}

	navigateToDetail(item) {
		this.props.navigation.navigate('Detail', {
			item: item
		})
	}	
	

	render() {
		return(
			<List items={contacts} navigateToDetail={this.navigateToDetail} />
		)
	}
}

ListScreen.navigationOptions = {
	title: 'Contacts'
};

export default ListScreen