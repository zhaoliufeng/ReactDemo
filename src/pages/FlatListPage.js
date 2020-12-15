import React, {Component} from 'react';
import Orientation from 'react-native-orientation';
import {FlatList, ImageBackground, StyleSheet, View, Text} from 'react-native';
const cardDataList = require('../PlayMenuCardData').cardDataList;

const TAG = 'TestTag';
const listData = [
  {title: '1', key: 1},
  {title: '2', key: 2},
  {title: '3', key: 3},
  {title: '4', key: 4},
  {title: '5', key: 5},
  {title: '6', key: 6},
  {title: '7', key: 7},
];

class FlatListPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    Orientation.lockToLandscape();
  }

  componentWillUnmount(): void {
    Orientation.unlockAllOrientations();
  }

  render() {
    return (
      <FlatList
        horizontal={true}
        data={cardDataList}
        keyExtractor={(item) => {
          item.key;
        }}
        initRenderNum={3}
        ListHeaderComponent={<View style={{width: 150}} />}
        ListFooterComponent={<View style={{width: 150}} />}
        renderItem={(item) => this._renderItem(item)}
        getItemLayout={(data, index) => ({
          length: 200,
          offset: 200 * index,
          index,
        })}
      />
    );
  }

  _renderItem = ({item}) => {
    return <ListItem title={item.title} normalImage={item.normalImage} />;
  };
}

class ListItem extends Component {
  render() {
    console.log(TAG, 'render item');
    return (
      <ImageBackground style={styles.bg} source={this.props.normalImage}>
        <Text style={styles.item}>{this.props.title}</Text>
      </ImageBackground>
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
