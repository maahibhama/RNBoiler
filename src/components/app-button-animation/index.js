import React, { Component } from 'react';
import { Animated, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import AppButton from '../app-button';
import styles from './styles';
import { icons } from '../../utilities/assets';

export class AppButtonAnimation extends Component {
  static propTypes = {
    title: PropTypes.string,
    styles: PropTypes.any,
    textStyles: PropTypes.any,
    onTouch: PropTypes.func,
    image: PropTypes.any,
    imageStyles: PropTypes.any,
    progress: PropTypes.number,
    completion: PropTypes.func,
    progressAnimationDuration: PropTypes.number
  };

  static defaultProps = {
    styles: {},
    textStyles: {},
    onTouch: () => {},
    imageStyles: {},
    title: null,
    image: null,
    progress: 0,
    progressAnimationDuration: 1,
    completion: () => {},
  };

  state = {
    animationStage: 0,
    pWidth: new Animated.Value(0),
    cWidth: new Animated.Value(100),
    height: new Animated.Value(12),
    borderRadius: new Animated.Value(2),
    iconOpacity: new Animated.Value(0),
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // do things with nextProps.someProp and prevState.cachedSomeProp
    if (prevState.animationStage == 1) {
      AppButtonAnimation.progressAnimation(nextProps, prevState);
    }

    return {
      // ... other derived state properties
    };
  }

  onTouch = this.onTouch.bind(this);

  onTouch() {
    this.setState({ animationStage: 1 });
    this.props.onTouch()
  }

  static progressAnimation(nextProps, prevState) {
    Animated.timing(prevState.pWidth, {
      toValue: nextProps.progress,
      duration: nextProps.progressAnimationDuration,
      useNativeDriver: false
    }).start(() => {
      if (nextProps.progress == 100) {
        AppButtonAnimation.progressBarAnimation(nextProps, prevState);
      }
    });
  }

  static progressBarAnimation(nextProps, prevState) {
    Animated.timing(prevState.cWidth, {
      toValue: 36,
      duration: 200,
      useNativeDriver: false
    }).start();
    Animated.timing(prevState.height, {
      toValue: 72,
      duration: 200,
      useNativeDriver: false
    }).start();
    Animated.timing(prevState.borderRadius, {
      toValue: 18,
      duration: 200,
      useNativeDriver: false
    }).start(() => {
      AppButtonAnimation.changeImageAnimation(nextProps, prevState);
    });
  }

  static changeImageAnimation(nextProps, prevState) {
    Animated.timing(prevState.iconOpacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      nextProps.completion();
    });
  }

  render() {
    const cHeight = this.state.height.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    })
    const cWidth = this.state.cWidth.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    })
    const pWidth = this.state.pWidth.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    })
    return (
      <View style={[styles.viewStyle, this.props.styles]}>
        {this.state.animationStage == 0 && (
          <AppButton title={this.props.title} styles={this.props.buttonStyle} onTouch={this.onTouch} />
        )}
        {this.state.animationStage == 1 && (
          <Animated.View
            style={[
              styles.progressViewContainer,
              { width: cWidth, height: cHeight, borderRadius: this.state.borderRadius },
            ]}>
            <Animated.View
              style={[
                styles.progressView,
                { width: pWidth, borderRadius: this.state.borderRadius },
              ]}>
              <Animated.Image resizeMode={'center'} source={icons.valid} style={[styles.validIcon, { opacity: this.state.iconOpacity }]} />
            </Animated.View>
          </Animated.View>
        )}
      </View>
    );
  }
}

export default AppButtonAnimation;
