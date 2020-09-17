import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {captureRef} from 'react-native-view-shot';

import AppHeader from '../../component/app-header';
import StockColorSize from '../../component/stock-color-size';
import PenTool from '../../component/pen-tool';
import PenSkech from '../../component/pen-skech';
import SketchCanvasView from '../../component/sketch-canvas-view';

import {goBack} from '../../routes/NavigationService';
import {EditorColors, StockWidths} from '../../constants/content';

import styles from './styles';

const Home = (props) => {
  
  const [selectedImage, setSelectedImage] = useState(
    props.route.params.selectedImage,
  );
  const [isPenSelected, setIsPenSelected] = useState(true);

  const [selectedColor, setSelectedColor] = useState(EditorColors[0]);
  const [showLineWidth, setShowLineWidth] = useState(false);
  const [selectedStockWidth, setSelectedStockWidth] = useState(StockWidths[0]);
  const [enableEarser, setEnableEarser] = useState(false);
  const [undoPaths, setUndoPaths] = useState([]);

  let _sketchCanvas = null;
  let _viewShot = null;

  useEffect(() => {}, [showLineWidth]);

  const onClickBack = () => {
    goBack();
  };

  const onClickDelete = () => {
    if (!!_sketchCanvas) {
      _sketchCanvas.clear();
      setUndoPaths([]);
    }
  };

  const onClickUndo = () => {
    if (!!_sketchCanvas) {
      const allPaths = _sketchCanvas.getPaths() || [];
      if (allPaths.length > 0) {
        const lastPath = allPaths.slice(-1)[0];

        const paths = [...undoPaths, ...[lastPath]];
        setUndoPaths(paths);
        _sketchCanvas.undo();
      }
    }
  };

  const onClickRedo = () => {
    if (!!_sketchCanvas && undoPaths.length > 0) {
      const lastPath = undoPaths.pop();
      setUndoPaths(undoPaths);
      _sketchCanvas.addPath(lastPath);
    }
  };

  const onClickDone = () => {
    if (!!_viewShot) {
      captureRef(_viewShot, {
        format: 'jpg',
        quality: 0.8,
      }).then(
        (uri) => {
          CameraRoll.saveToCameraRoll(uri)
            .then(Alert.alert('Success', 'Photo added to camera roll!'))
            .catch((err) => console.log('err:', err));
        },
        (error) => console.error('Oops, snapshot failed', error),
      );
    }
  };

  const onClickPen = () => {
    setIsPenSelected(true);
    setSelectedStockWidth(2);
  };

  const onClickSkech = () => {
    setIsPenSelected(false);
    setSelectedStockWidth(16);
  };

  const onClickColor = (item) => {
    setSelectedColor(item);
  };

  const onClickChangeStockWidth = (item) => {
    setSelectedStockWidth(item);
  };

  const onClickColorChange = () => {
    showColorAndStockChange(false);
  };

  const onClickStockWidth = () => {
    showColorAndStockChange(true);
  };

  const showColorAndStockChange = (showLine) => {
    setShowLineWidth(showLine);
  };

  const onClickEarser = () => {
    setEnableEarser(!enableEarser);
  };

  return (
    <SafeAreaView style={styles.main}>
      <AppHeader
        onClickBack={onClickBack}
        onClickDelete={onClickDelete}
        onClickUndo={onClickUndo}
        onClickRedo={onClickRedo}
        onClickDone={onClickDone}
      />
      <SketchCanvasView
        viewShotRef={(ref) => (_viewShot = ref)}
        sketchCanvasRef={(ref) => (_sketchCanvas = ref)}
        selectedImage={selectedImage}
        enableEarser={enableEarser}
        selectedStockWidth={selectedStockWidth}
        selectedColor={selectedColor}
      />
      <PenSkech
        onClickPen={onClickPen}
        onClickSkech={onClickSkech}
        isPenSelected={isPenSelected}
      />
      <PenTool
        selectedColor={selectedColor}
        enableEarser={enableEarser}
        onClickColorChange={onClickColorChange}
        onClickStockWidth={onClickStockWidth}
        onClickEarser={onClickEarser}
      />
      <StockColorSize
        selectedColor={selectedColor}
        showLineWidth={showLineWidth}
        onClickChangeStockWidth={onClickChangeStockWidth}
        onClickColor={onClickColor}
      />
    </SafeAreaView>
  );
};

Home.propTypes = {};

export default Home;
