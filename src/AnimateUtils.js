import {
  TouchableOpacity,
  StyleSheet,
  View,
  Animated,
  Image,
  Easing,
} from 'react-native';

export default class AnimateUtil {
  static instance = null;
  opacityBreathShow;
  opacityBreathHide;
  static getInstance() {
    if (this.instance === null) {
      this.instance = new AnimateUtil();
    }
    return this.instance;
  }

  opacityBreathAnimateCreate(state, startV, endV, duration) {
    this.opacityBreathShow = Animated.timing(state, {
      useNativeDriver: true,
      toValue: startV,
      duration: duration,
      easing: Easing.linear,
    });

    this.opacityBreathHide = Animated.timing(state, {
      useNativeDriver: true,
      toValue: endV,
      duration: duration,
      easing: Easing.linear,
    });
  }

  start = (state, startV, endV, duration) => {
    console.log('testTag1', this.opacityBreathShow);
    if (
      this.opacityBreathShow === undefined ||
      this.opacityBreathHide === undefined
    ) {
      console.log('testTag2', this.opacityBreathShow);
      this.opacityBreathAnimateCreate(state, startV, endV, duration);
    }
    console.log('testTag3', this.opacityBreathShow.duration);
    this.opacityBreathHide.start(
      console.log('testTag4', 'show显示完成'),
      this.opacityBreathShow.start(console.log('testTag5', 'show隐藏完成')),
    );
  };
}
