import React, {Component, PropTypes} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
  Image
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {connect} from 'react-redux';

import { movies } from '../services/data.json';

const movie = movies[0];

const posterWidth = Dimensions.get('window').width;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;


class MoreInfoScreen extends Component {
  render() {
    return (
      <ParallaxScrollView
        backgroundColor="blue"
        contentBackgroundColor="pink"
        parallaxHeaderHeight={300}
        renderBackground={() => (
          <View key="background">
            <Image source={{
              uri: 'http://image.tmdb.org/t/p/original/811DjJTon9gD6hZ8nCjSitaIXFQ.jpg',
              width: window.width,
              height: PARALLAX_HEADER_HEIGHT}}/>
            <View style={{position: 'absolute',
              top: 0,
              width: window.width,
              backgroundColor: 'rgba(0,0,0,.4)',
              height: PARALLAX_HEADER_HEIGHT}}/>
          </View>
        )}
        renderForeground={() => (
          <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          </View>
        )}>
        <View style={{ height: 500 }}>
          <Text>
            Scroll me
            Scroll me
            Scroll meScroll me
            Scroll meScroll meScroll meScroll meScroll meScroll me
            Scroll me
            Scroll me
            Scroll me
            Scroll me

          </Text>
        </View>
      </ParallaxScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  return state;
}

export default connect(mapStateToProps)(MoreInfoScreen);
