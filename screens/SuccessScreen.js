import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../assets/styles'
import { AntDesign as Icon } from "react-native-vector-icons";

export default function SuccessScreen({ navigation, route }) {

  return (
    <View style={styles.backGround}>
      <View style={{ marginTop: '20%', alignItems: 'center' , flex: 1}}>
        <Text style={styles.titles}>You're Order is Complete!</Text>
        <Icon name="checkcircle" style={styles.icon}></Icon>
        <TouchableOpacity style={[styles.checkButton, {width: '30%', marginTop: "20%"}]} onPress={() => navigation.popToTop()}>
          <Text style={styles.checkButtonText}>back to store</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
