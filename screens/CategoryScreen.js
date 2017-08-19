import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Platform, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import * as actions from '../actions';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import CategoryList from '../components/CategoryList';
import Button from '../components/Button';

class CategoryScreen extends Component {
  static propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    selectCategory: PropTypes.func.isRequired,
    selectedCategory: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Yeppa Täby',
    headerStyle: {
      backgroundColor: '#F59B26',
    },
    headerTitleStyle: {
      color: '#FFFFFF',
    },
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate()}>
        <Icon containerStyle={{ marginRight: 15 }} color="#fff" type="entypo" name="cross" />
      </TouchableOpacity>
    ),
    headerLeft: Platform.OS === 'ios' && (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon containerStyle={{ marginLeft: 15 }} color="#fff" type="entypo" name="chevron-small-left" />
      </TouchableOpacity>
    ),
  });

  componentWillMount() {
    this.props.fetchCategories();
  }

  touchHandler = (id) => {
    this.props.selectCategory(id);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ProgressBar completed={30} />
        <Header text="Vad fick du hjälp med?" />
        <CategoryList
          categories={this.props.categories}
          touchHandler={this.touchHandler}
          selected={this.props.selectedCategory}
        />
        <Button
          onPress={(this.props.selectedCategory ?
            () => this.props.navigation.navigate() :
            () => Alert.alert('Välj kategori')
          )}
          icon="arrow-right"
          type="entypo"
          color="#fff"
          text="Nästa"
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.category.categories,
  selectedCategory: state.category.selectedCategory,
});

export default connect(mapStateToProps, actions)(CategoryScreen);
