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

import {connect} from 'react-redux';
import * as feedActions from '../reducers/feed/actions';
import _ from 'lodash';


class FeedTabScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showedMovieIndex: 0,
    };
  }

  componentWillMount() {
    this.props.dispatch(feedActions.fetchMoviesAction())
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>{_.get(this.props.feed.movies[this.state.showedMovieIndex], 'title')}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function mapStateToProps(state) {
  return {
    feed: state.feed,
  }
}

export default connect(mapStateToProps)(FeedTabScreen);
