import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import styles from '../assets/styles';
import { FormBuilder } from 'react-native-paper-form-builder';
import { Button, TextInput } from 'react-native-paper';

export default function PaymentScreen({ navigation, route }) {
  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      fname: '',
      country: '',
      city: '',
      address: '',
    },
    mode: 'onChange',
  });

  return (
    <View style={stylesE.containerStyle}>
      <View style={styles.backGround}>
        <ScrollView contentContainerStyle={[stylesE.scrollViewStyle, { flexGrow: 1 }]}>
          <Text style={styles.titles}>Customer information</Text>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={[
              {
                type: 'text',
                name: 'fname',
                rules: {
                  required: {
                    value: true,
                    message: 'first name is required',
                  },
                },
                textInputProps: {
                  label: 'First name',
                },
              },
              {
                type: 'text',
                name: 'lname',

                rules: {
                  required: {
                    value: true,
                    message: 'Last name is required',
                  },
                },
                textInputProps: {
                  label: 'Last name',
                },
              },
              {
                type: 'email',
                name: 'email',

                rules: {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value:
                      /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
                    message: 'Email is invalid',
                  },
                },
                textInputProps: {
                  label: 'Email',
                },
              },
              {
                type: 'text',
                name: 'phoneNumber',
                rules: {
                  required: {
                    value: true,
                    message: 'Phone number is required',
                  },
                  minLength: {
                    value: 10,
                    message: 'Phone number should be 10 digits',
                  },
                  maxLength: {
                    value: 10,
                    message: 'Phone number should be 10 digits',
                  },
                },
                textInputProps: {
                  label: 'Phone number',
                },
              },
              {
                type: 'text',
                name: 'country',
                rules: {
                  required: {
                    value: true,
                    message: 'Country is required',
                  },
                  minLength: {
                    value: 2,
                    message: 'Country should be at least 2 characters',
                  },
                  maxLength: {
                    value: 14,
                    message: 'Country should be last than 14 characters',
                  },
                },
                textInputProps: {
                  label: 'Country',
                },
              },
              {
                type: 'text',
                name: 'city',
                rules: {
                  required: {
                    value: true,
                    message: 'City is required',
                  },
                  minLength: {
                    value: 2,
                    message: 'City should be at least 2 characters',
                  },
                  maxLength: {
                    value: 14,
                    message: 'City should be last than 14 characters',
                  },
                },
                textInputProps: {
                  label: 'City',
                },
              },
              {
                type: 'text',
                name: 'address',
                rules: {
                  required: {
                    value: true,
                    message: 'Address is required',
                  },
                  minLength: {
                    value: 2,
                    message: 'Address should be at least 2 characters',
                  },
                  maxLength: {
                    value: 14,
                    message: 'Address should be last than 14 characters',
                  },
                },
                textInputProps: {
                  label: 'Address',
                },
              },
            ]}
          />
          
          <Text style={styles.titles}>Payment information</Text>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={[
              {
                type: 'text',
                name: 'cname',
                rules: {
                  required: {
                    value: true,
                    message: 'Card holder name is required',
                  },
                },
                textInputProps: {
                  label: 'Card holder name',
                },
              },
              {
                type: 'text',
                name: 'id',

                rules: {
                  required: {
                    value: true,
                    message: 'Card holder ID is required',
                  },
                  minLength:{
                    value: 8,
                    message: 'Card holder ID should be at least 8 characters'
                  },
                  maxLength:{
                    value: 10,
                    message: 'Card holder ID should be between 8-10 characters'
                  }
                },
                textInputProps: {
                  label: 'Card holder ID',
                },
              },
              {
                type: 'text',
                name: 'creditCardNo',

                rules: {
                  required: {
                    value: true,
                    message: 'Credit Card Number is required',
                  },
                  minLength: {
                    value: 16,
                    message: 'Credit Card Number must be 16 digits',
                  },
                  maxLength: {
                    value: 16,
                    message: 'Credit Card Number must be 16 digits',
                  },
                  pattern: {
                    value:
                           /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
                          ,
                    message: 'Credit Card Number is invalid',
                  },
                },
                textInputProps: {
                  label: 'Credit Card Number',
                },
              },
              {
                type: 'text',
                name: 'expdate',
                rules: {
                  required: {
                    value: true,
                    message: 'Expiration date is required',
                  },
                  minLength: {
                    value: 4,
                    message: 'Expiration date must be 4 digits - (mm/yy)',
                  },
                  maxLength: {
                    value: 4,
                    message: 'Expiration date must be 4 digits - (mm/yy)',
                  },
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                    message: 'Expiration date is invalid',
                  }
                },
                textInputProps: {
                  label: 'Expiration date',
                },
              },
              {
                type: 'text',
                name: 'ccv',
                rules: {
                  required: {
                    value: true,
                    message: 'CCV is required',
                  },
                  minLength: {
                    value: 3,
                    message: 'CCV must be 3 digits - (XYZ)',
                  },
                  maxLength: {
                    value: 3,
                    message: 'CCV must be 3 digits - (XYZ)',
                  },
                  pattern: {
                    value: /^[0-9]{3,4}$/,
                    message: 'CCV is invalid'
                  }
                },
                textInputProps: {
                  label: 'CCV',
                },
              },
            ]}
          />
          <Button
            mode={'contained'}
            onPress={handleSubmit((data) => {
              console.log('form data', data)
              navigation.navigate("Success", { country: data.country, city: data.city, address: data.address })
            })}>
            Submit
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}

const stylesE = StyleSheet.create({
  containerStyle: {
    flex: 1,
   
  },
  scrollViewStyle: {
    flex: 0,
    padding: 15,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
});









// export default function App({ navigation, route }) {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors, isValid } } = useForm({ mode: 'onBlur' });
//   const onSubmit = data => navigation.navigate('Success');
//   console.log(errors);


//   return (
//     <View style={styles.backGround}>
//       <View style={[styles.container, { alignItems: 'center' }]}>
//         <Text style={styles.titles}>Customer information</Text>
//         <ScrollView style={{ margin: 30 }} onSubmit={handleSubmit(onSubmit)} >
//           <Controller
//             control={control}
//             name="name"
//             render={({ field: { onChange, value, onBlur } }) => (
//               <TextInput
//                 style={[styles.input, { alignItems: 'center' }]}
//                 iconName="person"
//                 iconType="MaterialIcons"
//                 placeholder="Enter your name here"
//                 value={value}
//                 onBlur={onBlur}
//                 onChangeText={value => onChange(value)}
//               />
//             )}
//             rules={{
//               required: {
//                 value: true,
//                 message: 'Field is required!'
//               }
//             }}
//           />
//           <Controller
//             control={control}
//             name="lastName"
//             render={({ field: { onChange, value, onBlur } }) => (
//               <TextInput
//                 style={styles.input}
//                 iconName="person"
//                 iconType="MaterialIcons"
//                 placeholder="Enter your last name here"
//                 value={value}
//                 onBlur={onBlur}
//                 onChangeText={value => onChange(value)}
//               />
//             )}
//             rules={{
//               required: {
//                 value: true,
//                 message: 'Field is required!'
//               }
//             }}
//           />
//           <Controller
//             control={control}
//             name="email"
//             render={({ field: { onChange, value, onBlur } }) => (
//               <TextInput
//                 style={styles.input}
//                 iconName="person"
//                 iconType="MaterialIcons"
//                 placeholder="Email"
//                 value={value}
//                 onBlur={onBlur}
//                 onChangeText={value => onChange(value)}
//               />
//             )}
//             rules={{
//               type:{
//                 value: 'email'
//               },
//               required: {
//                 value: true,
//                 message: 'Field is required!',
//                 type: 'email'
//               },
//               pattern:{
//                  value: '^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$',
//                  message: `It's not a valid email`
//               },
//               }}
//          />
//           <Button title='Submit' onPress={handleSubmit(onSubmit)} />
//         </ScrollView>
//       </View>
//     </View>
//   );
// }

{/* <View style={[styles.container, { alignItems: 'center' }]}>
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
         */}
