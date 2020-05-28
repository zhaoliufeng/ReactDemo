import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
  Easing,
  View,
} from 'react-native';

class ViewFramePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alpha: new Animated.Value(1),
    };
  }

  logf1 = () => {
    console.warn('click f1');
  };

  logf2 = () => {
    console.warn('click f2');
  };

  logf3 = () => {
    console.warn('click f3');
  };

  render() {
    return (
      <View style={styles.f1}>
        <TouchableOpacity onPress={() => this.logf1()}>
          <View style={styles.f2} pointerEvents="box-none">
            <TouchableOpacity onPress={() => this.logf2()}>
              <TouchableOpacity
                style={styles.f3}
                onPress={() => this.logf3()}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  f1: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
  },
  f2: {
    width: 300,
    height: 300,
    borderWidth: 5,
    borderColor: 'blue',
  },
  f3: {
    width: 200,
    height: 200,
    backgroundColor: 'yellow',
  },
});

export default ViewFramePage;
