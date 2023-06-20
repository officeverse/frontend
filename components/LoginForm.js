import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './Button';
import { Formik } from 'formik';
import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export default function ({ navigation, onSubmit }) {
  return (
    <View style={styles.loginContainer} className="mt-16 px-5">
      <View className="flex-row items-center justify-center mt-16">
        <Text className="text-2xl font-bold color-white mb-3">
          Welcome Back
        </Text>
      </View>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ username: '', password: '' }}
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
                title="Log In"
                disabled={!isValid}
              />
              <Text>{'   '}</Text>
              <Button // disable going back to login
                onPress={() =>
                  navigation.reset({ index: 0, routes: [{ name: 'SignUp' }] })
                }
                title="Sign Up"
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
