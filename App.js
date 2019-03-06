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
import EventDetail from './EventDetail'
import Developers from './Developers';
import Registration from './Registration';
export default class App extends Component{
  render() {
    return (
      <Registration/>
    );
  }
}
const Container=createAppContainer(AppNavigator);

