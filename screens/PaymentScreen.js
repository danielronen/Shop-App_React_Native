import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View, Button, TextInput, SafeAreaView, ScrollView, Form, TouchableOpacity } from "react-native";
import styles from '../assets/styles';

export default function App({ navigation, route }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <View style={styles.backGround}>
      <ScrollView style={{ margin: 30 }} onSubmit={handleSubmit(onSubmit)} >
        <View style={[styles.container, { alignItems: 'center' }]}>
          <Text style={styles.titles}>Customer information</Text>
          <TextInput style={styles.input}
            type="text"
            placeholder="First name"
            textContentType='givenName'
            minLength={1}
            required
          />
          <TextInput style={styles.input}
            type="text"
            placeholder="Last name"
            textContentType='familyName'
            minLength={1}
            required
          />
          <TextInput style={styles.input}
            type="email"
            placeholder="Email"
            textContentType='emailAddress'
            required
          />
          <TextInput style={styles.input}
            type="numeric"
            placeholder="Phone Number"
            textContentType='telephoneNumber'
            required
          />
          <TextInput style={styles.input}
            type="text"
            placeholder="Country"
            textContentType='countryName'
            required
          />
          <TextInput style={styles.input}
            type="text"
            placeholder="City"
            textContentType='addressCity'
            required
          />
          <TextInput style={styles.input}
            type="text"
            placeholder="Address"
            textContentType='fullStreetAddress'
            required
          />
          <Text style={styles.titles}>Payment information</Text>

          <TextInput style={styles.input}
            type="text"
            placeholder="Card Holder Name"
            textContentType='username'
            minLength={1}
            required
          />
          <TextInput style={styles.input}
            type="numeric"
            placeholder="ID Number"
            textContentType='none'
            required
          />
          <TextInput style={styles.input}
            type="numeric"
            placeholder="Credit Card Number"
            textContentType='creditCardNumber'
            required
          />
          <TextInput style={styles.input}
            type="numeric"
            placeholder="Exp date"
            textContentType=''
            required
          />


          <TextInput type="submit" />
          <TouchableOpacity style={styles.checkButton} onPress={() => navigation.navigate("Success")}>
            <Text style={styles.checkButtonText}>Pay</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}