import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './Button';
import { Formik } from 'formik';
import * as yup from 'yup';

const signupValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, ({ min }) => `Username must be at least ${min} characters`)
    .max(20, ({ max }) => `Username cannot exceed ${max} characters`)
    .matches(
      new RegExp(/^(?![_.])[a-zA-Z0-9._]+(?<![_.])$/),
      () =>
        'Invalid username.\nOnly _ or . is allowed for special characters.\nUsername should not start or end with special characters'
    )
    .required(),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .matches(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
      () =>
        'Password should comprise of the following:\n- Uppercase characters\n- Lowercase characters\n- Numbers\n- Special characters (@$!%*?&)'
    )
    .required('Password is required'),
  signUpCode: yup
    .string()
    .matches(
      new RegExp(/^\S+$/),
      'Please ensure that there are no spaces in the code'
    )
    .required('Sign up code is required'),
});

export default function ({ navigation, onSubmit }) {
  return (
    <View style={styles.loginContainer} className="mt-16 px-5">
      <View className="flex-row items-center justify-center mt-16">
        <Text className="text-2xl font-bold color-white mb-3">
          Register for an account
        </Text>
      </View>
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          username: '',
        }}
        onSubmit={onSubmit}
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
              name="username"
              placeholder="Username"
              style={styles.textInput}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {errors.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
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
            <TextInput
              name="signUpCode"
              placeholder="Sign Up Code"
              style={styles.textInput}
              onChangeText={handleChange('signUpCode')}
              onBlur={handleBlur('signUpCode')}
              value={values.signUpCode}
            />
            {errors.signUpCode && (
              <Text style={styles.errorText}>{errors.signUpCode}</Text>
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
