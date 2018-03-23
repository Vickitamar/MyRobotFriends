import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: '#ddd',
    marginLeft: 10
  }
});

class ListSeparator extends Component {
	render() {
		return (
			<View style={styles.container} />
		)
	}
}

export default ListSeparator