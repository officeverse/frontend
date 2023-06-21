import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './Button';
import { Formik } from 'formik';
import * as yup from 'yup';

const signUpConfirmValidationSchema = yup.object().shape({
  confirmationCode: yup
    .string()
    .min(6, ({ min }) => `Confirmation code must be ${min} characters`)
    .max(6, ({ max }) => `Confirmation code must be ${max} characters`)
    .matches(new RegExp(/^[0-9]*$/), () => 'Only digits are allowed')
    .required('Confirmation code is required'),
});

export default function ({ onSubmit, onRequestResend, email }) {
  return (
    <View style={styles.loginContainer} className="mt-16 px-5">
      <View className="flex-column items-center justify-center mt-16">
        {!email && (
          <Text className="text-lg font-bold color-white mb-3">
            Confirmation code has been sent to your registered email.
          </Text>
        )}
        {email && (
          <>
            <Text className="text-lg font-bold color-white mb-3">
              Please enter your confirmation code sent to:
            </Text>
            <Text className="text-md font-bold color-white mb-3">{email}</Text>
          </>
        )}
      </View>
      <Formik
        validationSchema={signUpConfirmValidationSchema}
        initialValues={{ confirmationCode: '' }}
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
              name="confirmationCode"
              placeholder="Your confirmation code"
              style={styles.textInput}
              onChangeText={handleChange('confirmationCode')}
              onBlur={handleBlur('confirmationCode')}
              value={values.confirmationCode}
              keyboardType="number-pad"
            />
            {errors.confirmationCode && (
              <Text style={styles.errorText}>{errors.confirmationCode}</Text>
            )}
            <View className="flex-row items-center justify-center px-2 mt-5">
              <Button
                onPress={handleSubmit}
                title="Submit"
                disabled={!isValid}
              />
              <Text>{'   '}</Text>
              <Button
                onPress={onRequestResend}
                title="Resend Code"
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
