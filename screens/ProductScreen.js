import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, Button, Alert, useWindowDimensions } from 'react-native';
import styles from '../assets/styles'
import { PRODUCTS, CART } from "../data/dummy-data"

export default function ProductScreen({ navigation, route }) {
  // store productId from CountryTripScreen:
  const { productId } = route.params;
  // find all data for productId:
  const selectedProduct = PRODUCTS.find((product) => product.id === productId);
  const sizesArr = selectedProduct.sizes;


  return (
    <View style={[styles.scrollViewWrapper, styles.backGround ]}>
      <ScrollView style={{marginBottom: 10}}>
          <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.txt}>{selectedProduct.title}</Text>
            <Text style={styles.txt}>Price: {selectedProduct.price} $</Text>
            <Text style={styles.txt}>Price inc' Shipping: {selectedProduct.priceInc} $</Text>
          </View>
          <Text style={styles.title}>Description</Text>
          <View style={styles.listItem}>
            <Text style={styles.txt}>{selectedProduct.description}</Text>
          </View>
          <Text style={styles.title}>Sizes</Text>
          <View style={styles.listSizes}>
            <Text style={styles.txt}>{sizesArr}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                CART.push(selectedProduct)
                Alert.alert("Added!","Product Was Added To Cart", [
                  {
                    text:"Move to cart",
                    onPress: () => {navigation.navigate("Shopping Cart", {numOfProd: CART.length})}
                  },{
                    text:"Continue Shopping",
                    onPress: () => {}
                  }
                ])

              }}
              style={[styles.checkButton, { width: 90, height: 30, backgroundColor: "#0476D0" }]}>
              <Text style={styles.checkButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.checkButton, { width: 110 , marginBottom: 30}]}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.checkButtonText}>Back to store</Text>
      </TouchableOpacity>
    </View>
  );
}
