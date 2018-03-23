import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Image from 'react-native-image-progress';

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

class Detail extends Component {
	render () {
		const { item } = this.props;
		const image = {
      		uri: item.picture
    		};

    	const pronoun = item.gender === 'female' ? 'She' : 'He';
    	const myBadGrammar = item.gender === 'female' ? 'Her' : 'His';

		return (
			<View style={styles.container}>
			<Image style={styles.image} source={image}/>
			<Text style={styles.text}>{item.name} is {item.gender}</Text>
			<Text style={styles.text}>{pronoun} lives at {item.address}</Text>
			<Text style={styles.text}>{pronoun} works at {item.company}</Text>
			<Text style={styles.text}>{myBadGrammar} favourite film is {item.filmName}</Text>
			</View>
		)
	}
}

export default Detail