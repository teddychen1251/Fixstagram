/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import { Header, Icon } from 'react-native-elements';
import Feed from './src/components/Feed';
import TimeTicker from './src/components/TimeTicker'

const feed = React.createRef();

const App: () => React$Node = () => {
  
  return (
    <>
      <Header
        backgroundColor='#e4cdb4'
        leftComponent={
          <Icon 
            name='camera' 
            type='font-awesome'
            color='#656b69'
            />
        }
        centerComponent={
          <>
            <TimeTicker />
            <Text style={styles.headerText}>FixTheGram</Text>
          </>
        }
        rightComponent={
          <Icon 
            name='paper-plane' 
            type='font-awesome'
            color='#656b69'
            />
        }
      />
      <Feed ref={feed}/>
      <View style={styles.footer}>
        <TouchableHighlight onPress={switchFeed} underlayColor='#eee'>
          <Icon 
            name='home' 
            type='font-awesome'
            size={40}
            color='#656b69'
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={switchFeed} underlayColor='#eee'>
          <Icon 
            name='search' 
            type='font-awesome'
            size={40}
            color='#656b69'
          />
        </TouchableHighlight>
        <Icon
          name='plus-circle' 
          type='font-awesome'
          size={40}
          color='#656b69'
        />
        <Icon
          name='heart' 
          type='font-awesome'
          size={40}
          color='#656b69'
        />
        <Icon
          name='user' 
          type='font-awesome'
          size={40}
          color='#656b69'
        />
      </View>
    </>
  );
};

switchFeed = () => {
  feed.current.switchFeed();
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#e4cdb4',
    height: 90,
    flexDirection: 'column-reverse',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 40,
    fontFamily: 'Cookie-Regular',
    color: '#656b69',
    // position: 'absolute',
    // bottom: -14
  },
  feed: {
    // paddingTop: 80
  },
  footer: {
    backgroundColor: '#e4cdb4',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5
  }
})

export default App;
