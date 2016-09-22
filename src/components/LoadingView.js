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

export default class LoadingView extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <View>
        <Text>Loading Movies</Text>
      </View>
    );
  }

}
