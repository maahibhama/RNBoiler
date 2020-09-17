import React from 'react';
import {View, Image, Alert} from 'react-native';
import PropTypes from 'prop-types';

import ViewShot from 'react-native-view-shot';

import SketchCanvas from '../canvas/SketchCanvas';

import styles from './styles';

const SketchCanvasView = (props) => {
  const {selectedImage, enableEarser, selectedStockWidth, selectedColor} = props;
  return (
    <ViewShot
      ref={props.viewShotRef}
      options={{format: 'jpg', quality: 0.9}}
      style={styles.imageConatainer}>
      <Image
        resizeMethod={'resize'}
        resizeMode={'center'}
        source={{uri: selectedImage.uri}}
        style={styles.selectedImage}
      />
      <View style={styles.imageViewAboveView}>
        <SketchCanvas
          ref={props.sketchCanvasRef}
          style={{backgroundColor: 'transparent', flex: 1}}
          strokeColor={enableEarser ? '#00000000' : selectedColor.color}
          onStrokeEnd={(data) => {}}
          strokeWidth={enableEarser ? 15 : selectedStockWidth}
          onSketchSaved={(success, path) => {
            const message = 'Path: - ' + path;
            Alert.alert('succefully saved.', message);
          }}
          onPathsChange={(pathsCount) => {
            console.log('pathsCount', pathsCount);
          }}
          localSourceImage={{
            filename: selectedImage.uri,
            mode: 'AspectFit',
            directory: SketchCanvas.MAIN_BUNDLE,
          }}
        />
      </View>
    </ViewShot>
  );
};

SketchCanvasView.propTypes = {
  viewShotRef: PropTypes.any.isRequired,
  sketchCanvasRef: PropTypes.any.isRequired,
  selectedImage: PropTypes.any.isRequired,
  enableEarser: PropTypes.bool,
  selectedStockWidth: PropTypes.number,
  selectedColor: PropTypes.any.isRequired
};
SketchCanvasView.defaultProps = {
  enableEarser: false,
  selectedStockWidth: 2
};

export default SketchCanvasView;
