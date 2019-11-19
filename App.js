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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CardList from './src/components/CardList';

const App: () => React$Node = () => {
  return (
    <>
      <Text>{'INSTAGRAM'}</Text>
      <Text>{'INSTAGRAM'}</Text>
      <Text>{'INSTAGRAM'}</Text>
      <Text>{'INSTAGRAM'}</Text>

      <CardList 
          items={
              ([
                  'tedthemeap',
                  'ngozi4ever',
                  'hay.its.janielle',
                  'sik_Alex',
                  'houseonacahil',
                  'realJaronLanier',
                  'jia.tolentino',
                  'odelllll',
                  'dr.markley2u',
                  'message_man_mcluhan',
                  'neil.keep.me.posted.man'
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
    </>
  );
};

export default App;
