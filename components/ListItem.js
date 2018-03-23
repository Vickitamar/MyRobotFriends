import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 10
  }
});

class ListItem extends Component {
	render() {
		const { item, onPressItem } = this.props;
		return (
			<View style={styles.container}>
				<TouchableHighlight onPress={onPressItem} underlayColor="#e4e4e4">
				<Text style={styles.title}>{item.name}</Text>

				</TouchableHighlight>
			</View>
		)
	}
}

export default ListItem