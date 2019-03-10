/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation'
import AppNavigator from './navigation/StackNaviagtion'
export default class App extends Component{
  render() {
    return (
      <Container/>
    );
  }
}
const Container=createAppContainer(AppNavigator);

