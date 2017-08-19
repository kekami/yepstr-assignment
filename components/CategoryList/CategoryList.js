import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import Category from '../Category';

const CategoryList = ({ categories, selected, touchHandler }) => (
  <ScrollView>
    <View style={styles.tasksContainer}>
      {renderCategories(categories, selected, touchHandler)}
    </View>
  </ScrollView>
);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
  selected: PropTypes.string,
  touchHandler: PropTypes.func,
};

function renderCategories(categories, selected, touchHandler) {
  return categories.map((category) => {
    const { id, title, icon } = category;
    return (
      <Category
        key={id}
        touchHandler={() => touchHandler(id)}
        icon={icon}
        title={title}
        selected={selected === id}
      />
    );
  });
}

const styles = {
  tasksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#DFDFDF',
  },
};

export default CategoryList;
