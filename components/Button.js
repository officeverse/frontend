import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function Button({
  onPress,
  title = "Save",
  type = "primary",
  disabled = false,
}) {
  const isPrimary = type === "primary";
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: isPrimary ? 13 : 12,
      paddingHorizontal: isPrimary ? 38 : 32,
      borderRadius: 5,
      elevation: 3,
      backgroundColor: isPrimary ? "black" : "#ffffff",
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: isPrimary ? "#ffffff" : "black",
    },
    ...(!isPrimary && {
      border: { width: 5, style: "solid", color: "black" },
    }),
  });

  return (
    <Pressable style={styles.button} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
