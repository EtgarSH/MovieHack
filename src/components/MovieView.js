import React, {Component, PropTypes} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform
} from 'react-native';

import {SwipeView} from 'react-native-swipe-view';

export default class MovieView extends Component {
  constructor(props) {
    super(props)

  }

  static propTypes = {
    movie: PropTypes.object
  };

  render() {
    return (
      <View>
        <SwipeView style={{backgroundColor: 'red'}}>
          <Text>Hello</Text>
        </SwipeView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red',
  }
});
