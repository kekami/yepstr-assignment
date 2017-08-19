import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import CategoryScreen from './screens/CategoryScreen';
import store from './store';

const App = () => {
  const MainNavigator = StackNavigator({
    categories: { screen: CategoryScreen },
  });

  return (
    <Provider store={store}>
      <View style={[styles.container, { paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }]}>
        <MainNavigator />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F59B26',
  },
});

export default App;
