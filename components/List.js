import React, { Component } from 'react';
import {StyleSheet, FlatList } from 'react-native';
import ListItem from './ListItem';
import ListSeparator from './ListSeparator';

class List extends Component {
	constructor(props) {
	super(props);
	this.renderItem = this.renderItem.bind(this);

	}

	keyExtractor(item, index) {
		return index;
	}

	renderItem({item}) {
		const navigate = () => {
			this.props.navigateToDetail(item);
		};
		return <ListItem item={item} onPressItem={navigate} />
	}

	renderSeparator() {
		return <ListSeparator />
	}

	render() {
	    const { items } = this.props;
	    return (
	      <FlatList
	       data={items}
	       renderItem={this.renderItem}
	       keyExtractor={this.keyExtractor}
	       ItemSeparatorComponent={this.renderSeparator} />
	    );
  }
}
export default List