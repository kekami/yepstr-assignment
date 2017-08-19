import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const Category = ({ icon, title, selected, touchHandler }) => (
  <TouchableOpacity onPress={touchHandler}>
    <Image style={styles.imageContainer} source={{ uri: icon }}>
      <View style={[styles.categoryContainer, selected && styles.selected]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Image>
  </TouchableOpacity>
);

Category.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  touchHandler: PropTypes.func.isRequired,
};

const styles = {
  imageContainer: {
    position: 'relative',
    width: (width / 2) - 6,
    height: (width / 2) - 6,
    margin: 3,
  },
  categoryContainer: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: (width / 2) - 6,
    height: 40,
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  selected: {
    backgroundColor: '#F59B26',
  },
  title: {
    color: '#fff',
    fontSize: 17,
  },
};

export default Category;
