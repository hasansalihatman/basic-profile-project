import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <View
      style={{
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 5,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 12, color: "white" }}>
        Logo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
