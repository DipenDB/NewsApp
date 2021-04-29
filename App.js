/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import StackNavigation from './NewsApp/Navigations/StackNavigation';
import NewsProvider from './NewsApp/Stores/Provider/NewsProvider';


const App=() => {

  return (
      <NewsProvider>
        <PaperProvider>
            <StackNavigation/>
        </PaperProvider>
      </NewsProvider>

  );
};

const styles = StyleSheet.create({

});

export default App;
