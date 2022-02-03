import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';


const CategoriesGrid = (props) => {
  return (
    <TouchableOpacity style={styles.gridItemCat} onPress={props.onSelect}>
      <View>
      <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={[styles.categoriesContainer, {imageBackground:props.imageUrl}]}>
        <ImageBackground source={{ uri: props.bgImage }} style={styles.bgImage}>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItemCat: {
    marginTop: 70,
    flex: 1,
    margin: 15,
    height: 180,
    marginBottom: -40,

  },
  categoriesContainer: {
    flex: 1,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3, // for android - to see the shadow
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 5,
  },
  title: {
    fontFamily: "Helvetica",
    fontSize: 20,
    color: '#fff2cc',
    fontWeight: "bold",
    textAlign: 'center',
    textShadowRadius: 2,
    textShadowColor:"#330080",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});
export default CategoriesGrid;