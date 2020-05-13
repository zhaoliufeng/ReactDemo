import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
  Easing,
} from 'react-native';
import {start} from '../AnimateUtils';

const url = require('../bleUnconnect/home_icon_connect_normal6.png');
class FrameAnimate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alpha: new Animated.Value(1),
    };
  }

  animatedBox = () => {
    Animated.timing(this.state.alpha, {
      useNativeDriver: true,
      toValue: 0.3,
      duration: 750,
      easing: Easing.linear,
    }).start(() => this.showAnimateBox());
  };
  showAnimateBox = () => {
    Animated.timing(this.state.alpha, {
      useNativeDriver: true,
      toValue: 1,
      duration: 750,
      easing: Easing.linear,
    }).start(() => this.animatedBox());
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.animatedBox()}>
        <Animated.Image
          source={url}
          style={[
            styles.box,
            {
              opacity: this.state.alpha,
            },
          ]}
        />
        <Image
          style={{
            position: 'absolute',
            width: 68,
            height: 68,
            resizeMode: 'contain',
          }}
          source={require('../bleUnconnect/home_icon_connect_normal.png')}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default FrameAnimate;
