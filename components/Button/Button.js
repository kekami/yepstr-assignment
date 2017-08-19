import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const Button = ({ onPress, icon, color, type, text, disabled }) => (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
    <View style={[styles.buttonContainer, disabled && { opacity: 0.7 }]}>
      <Text style={styles.buttonText}>{text}</Text>
      {icon && <Icon containerStyle={{ marginLeft: 10 }} color={color} type={type} name={icon} />}
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

const styles = {
  buttonContainer: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F59B26',
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
  },
};

export default Button;
