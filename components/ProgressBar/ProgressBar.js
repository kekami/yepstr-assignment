import React from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ProgressBar = ({ completed }) => (
  <View style={styles.progressBar}>
    <View style={[styles.progress, { width: (completed / 100) * width }]} />
  </View>
);

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
};

const styles = {
  progress: {
    height: 4,
    backgroundColor: '#6AB867',
  },
  progressBar: {
    width,
    height: 4,
    backgroundColor: '#DFDFDF',
  },
};

export default ProgressBar;
