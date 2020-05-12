import React, {Component} from 'react';
import Orientation from 'react-native-orientation';
import {FlatList, ImageBackground, StyleSheet, View, Text} from 'react-native';

class FlatListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
    );
  }

}

const styles = StyleSheet.create({
  bg: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    padding: 10,
    margin: 50,
  },
  item: {
    fontSize: 20,
    color: '#fff',
    textAlignVertical: 'center',
    textAlign: 'center',
    height: 300,
    width: 300,
  },
});

export default FlatListPage;
