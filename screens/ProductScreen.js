import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Button, Alert, useWindowDimensions } from 'react-native';
import styles from '../assets/styles'
import { PRODUCTS, CART } from "../data/dummy-data"

export default function ProductScreen({ navigation, route }) {
  // store productId from CountryTripScreen:
  const { productId } = route.params;
  // find all data for productId:
  const selectedProduct = PRODUCTS.find((product) => product.id === productId);
  const sizesArr = selectedProduct.sizes;


  return (
    <SafeAreaView style={[styles.scrollViewWrapper, styles.backGround]}>

      <ScrollView >
        <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text>{selectedProduct.title}</Text>
          <Text>Price: {selectedProduct.price} $</Text>
          <Text>Price inc' Shipping: {selectedProduct.priceInc} $</Text>
        </View>
        <Text style={styles.title}>Description</Text>
        <View style={styles.listItem}>
          <Text>{selectedProduct.description}</Text>
        </View>
        <Text style={styles.title}>Sizes</Text>
        <View style={styles.listSizes}>
          <Text>{sizesArr}</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity 
          onPress={() =>{
            CART.push(selectedProduct)
            navigation.navigate("Shopping Cart")
          }}
          style={[styles.checkButton, { width: 90, height: 30, backgroundColor: "#7300e6" }]}>
            <Text style={styles.checkButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.checkButton, {width: 110}]}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.checkButtonText}>Back to store</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
