/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Header, Icon } from 'react-native-elements';
import CardList from './src/components/CardList';
import TimeTicker from './src/components/TimeTicker'

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
      <CardList
        style={styles.feed}
        items={
          ([
            'Teddy Chen [@tedthemeap]',
            'Ngozi Ozor [@ngozi4ever]',
            'Janielle Hay [@hay.its.janielle]',
            'Alex Sikorsky [@6sik_Alex]',
            'Cahil Potnis [@houseonacahil]',
            'Jaron Lanier [@realJaronLanier]',
            'Jia Tolentino [@jia.tolentino7]',
            'Jenny Odell [@odelllll]',
            'Hannah Markley [@dr.markley2u]',
            'Marshall McLuhan [@message_man_mcluhan]',
            'Neil Postman [@neil.keep.me.posted.ma]n'
          ]).map((handle, id) => { 
            return (
              {
                id,
                handle
              }
            );
          })
        }
      />
      <View style={styles.footer}>
        <Icon 
          name='home' 
          type='font-awesome'
          size={40}
          color='#656b69'
        />
        <Icon 
          name='search' 
          type='font-awesome'
          size={40}
          color='#656b69'
        />
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
