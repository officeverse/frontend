import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './Button';
import { Formik } from 'formik';
import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, ({ min }) => `First name must be at least ${min} characters`)
    .required(`First name is Required`),
  lastName: yup
    .string()
    .min(2, ({ min }) => `Last name must be at least ${min} characters`),
  dateOfBirth: yup.date().required(),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export default function ({ navigation }) {
  return (
    <View style={styles.loginContainer} className="mt-16 px-5">
      <View className="flex-row items-center justify-center mt-16">
        <Text className="text-2xl font-bold color-white mb-3">
          Register for an account
        </Text>
      </View>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          firstName: '',
          lastName: '',
          dateOfBirth: new Date(),
          email: '',
          password: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <TextInput
              name="firstName"
              placeholder="First Name"
              style={styles.textInput}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
            />
            {errors.firstName && (
              <Text style={styles.errorText}>{errors.firstName}</Text>
            )}
            <TextInput
              name="lastName"
              placeholder="Last Name"
              style={styles.textInput}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
            />
            {errors.lastName && (
              <Text style={styles.errorText}>{errors.lastName}</Text>
            )}
            <TextInput
              name="email"
              placeholder="Email"
              style={styles.textInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <TextInput
              name="password"
              placeholder="Password"
              style={styles.textInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <View className="flex-row items-center justify-center px-2 mt-5">
              <Button
                onPress={handleSubmit}
                title="Sign Up"
                disabled={!isValid}
              />
              <Text>{'   '}</Text>
              <Button // disable going back to login
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'PreSignIn' }],
                  })
                }
                title="Log In"
                type="secondary"
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  textInput: {
    height: 50,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 20,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
});
