import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function Button({
  onPress,
  title = "Save",
  type = "primary",
  disabled = false,
}) {
  const isPrimary = type === "primary";
  const isSignOut = type === "SignOut";
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: isPrimary ? 13 : 12,
      paddingHorizontal: isPrimary ? 38 : 32,
      borderRadius: 5,
      elevation: 3,
      backgroundColor: isPrimary
        ? "black"
        : isSignOut
        ? "transparent"
        : "#ffffff",
    },
    text: {
      fontSize: isSignOut ? 20 : 16,
      textDecorationLine: isSignOut ? "underline" : "none",
      lineHeight: 21,
      fontWeight: isSignOut ? "normal" : "bold",
      letterSpacing: 0.25,
      color: isPrimary ? "#ffffff" : isSignOut ? "#E7E2E2" : "black",
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
