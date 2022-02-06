import React, { useState } from 'react';
import { Text, View, FlatList, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { CART, COUPONS } from "../data/dummy-data";
import styles from '../assets/styles';


export default function CartScreen({ route, navigation }) {

  const myCart = CART;
  let res = CART.reduce(function (prev, current) {
    return prev + +current.priceInc
  }, 0);
  let price = res.toFixed(2);



  //const [discount, setDiscount] = useState(0);
  const [myCoupon, setMyCoupon] = useState("");
  const [VaildCoupon, setVaildCoupon] = useState()
  const [finalPrice, setFinalPrice] = useState(price);



  const checkCoupon = () => {
    const Dis = COUPONS.find(item => item.coupon === myCoupon);
    if (Dis != undefined) {
      let discount = Dis.discount;
      let res = price - (price * discount)
      setFinalPrice(res.toFixed(2));
      setVaildCoupon(true);
    }
    else {
      setVaildCoupon(false);
    }
  }



  // 2. Call ItemsGrid
  const renderItem = ({ item }) => {
    return (
      <View style={styles.gridItem}>
        <ImageBackground source={{ uri: item.imageUrl }} style={styles.BGImg}>
        </ImageBackground>
        <Text style={[styles.titles, { fontSize: 15 }]}>{item.title}</Text>
        <Text style={[styles.titles, { fontSize: 17 }]}>{item.price}$</Text>
      </View>
    );
  }

  return (
    <View style={styles.backGround}>
      <View style={{ height: "60%" }}>
        <Text style={[styles.titles, { fontSize: 40 }]}>My Items</Text>
        <FlatList
          keyExtractor={(item) => item.id}
          data={myCart}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
      <View style={[styles.container]}>
        <Text style={styles.titles}>Final price: {price}$</Text>

        <View style={[styles.inputView, {alignItems: 'center'}]}>
          <Text style={styles.textInput}>Coupon: </Text>
          <TextInput
            autoCapitalize='none'
            onChangeText={(text) => setMyCoupon(text)}
            style={[styles.input, { marginBottom: 5 },
            VaildCoupon ? "" : styles.inputError
            ]}
          />
          <Text style={styles.errorMsg}>
            {VaildCoupon ? "" : "coupon is invalid"}
          </Text>
          <View style={{ alignItems: 'center', textAlign: "center" }}>
            <TouchableOpacity
              style={styles.checkButton}
              onPress={() => {
                checkCoupon()
              }}>
              <Text style={[styles.checkButtonText, { fontSize: 20 }]}>CHECK</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.titles}>Price after discount: {finalPrice}$</Text>
        <View style={{ alignItems: 'center', textAlign: "center" }}>
          <TouchableOpacity
            style={styles.payButton}
            onPress={() => {
              navigation.navigate("Payment")
            }}>
            <Text style={[styles.checkButtonText]}>Go to payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

}
