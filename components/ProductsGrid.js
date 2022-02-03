import React from "react";
import {  View, Text, StyleSheet, TouchableOpacity, ImageBackground, Button} from "react-native";

import { CART } from "../data/dummy-data"
// 1. Add ImageBackground
// 2. add style.

const ItemsGrid = (props) => {
  return (
    <TouchableOpacity style={styles.gridItemProduct} onPress={props.onSelectProduct}>
      <View style={[styles.mainContainer, {backgroundColor:'#5c5cd6'}]}>
        <View style={styles.productRow }>
          <ImageBackground source={{ uri: props.bgImage }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.productDetail}>
          <Text style={{color:'#fff2cc', fontWeight: 'bold'}}>{props.title}</Text>
          <Text style={{color:'#fff2cc'}}>{props.price} $</Text>
          <TouchableOpacity
            onPress={() => CART.push(props.fullItem)}
            style={styles.button}>
            <Text style={{color:'#fff2cc'}}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  item: {
    height: 200,
    // width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  productRow: {
    flexDirection: "row",
    borderRadius: 50,
  },
  productHeader: {
    height: "80%",
  },
  productDetail: {
    marginTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
  },
  // ADD: must set wdth and height -> it is from the web.
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    

  },
  titleContainer: {
    height: 150,
    width: 150
  },
  mainContainer: {
    flex: 1,
    borderRadius: 15,
    shadowColor: "#24248f",
    shadowOpacity: 0.9,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3, // for android - to see the shadow
    justifyContent: "center",
    alignItems: "center",
  },
  gridItemProduct: {
    marginTop: 55,
    flex: 1,
    margin: 10,
    height: 200,
    marginBottom: 55,
  },
  button: {
    height: 30,
    width: 75,
    borderColor: "#b2b2b2",
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7e9ac8",
    margin: 10,
  },
});

export default ItemsGrid;