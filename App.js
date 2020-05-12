import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

const TAG = 'AppTag';
const menuData = [
  {title: '水平FlatList', routeName: 'FlatListPage'},
  {title: '帧动画', routeName: 'FrameAnimate'},
];
const func = (val) => {
  console.log(TAG, val);
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.engine}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.routeName}
          data={menuData}
          renderItem={(item) => this._renderItem(item)}
        />
      </View>
    );
  }

  _renderItem = ({item}) => {
    return (
      <ListItem
        title={item.title}
        onPress={() => {
          console.log('demoTag', 'onPress');
          this.props.navigation.navigate(item.routeName);
        }}
      />
    );
  };
}

class ListItem extends React.PureComponent {
  render() {
    return (
      <Text style={styles.item} onPress={this.props.onPress}>
        {this.props.title}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
    fontSize: 18,
    lineHeight: undefined,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 100,
    width: undefined,
    flex: 1,
    color: 'white',
    backgroundColor: '#49f',
  },
});

export default App;
