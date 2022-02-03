import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ShopNavigator from './navigation/ShopNavigation';

export default function App() {

    return (
      <ShopNavigator />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
