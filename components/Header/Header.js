import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const Header = ({ text }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.header}>{text}</Text>
  </View>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

const styles = {
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F59B26',
  },
  header: {
    color: '#fff',
    fontSize: 18,
  },
};

export default Header;
