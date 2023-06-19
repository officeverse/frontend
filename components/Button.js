import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button({ onPress, title = 'Save', type = 'primary' }) {
  const isPrimary = type === 'primary';
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: isPrimary ? '#fd5123' : '#ffffff',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: isPrimary ? '#ffffff' : '#fd5123',
    },
    ...(!isPrimary && {
      border: { width: 5, style: 'solid', color: '#fd5123' },
    }),
  });

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
