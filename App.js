import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Navigator } from "./Navigator";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
