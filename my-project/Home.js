import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavigationButton from "./HomeComponents/NavigationButton";
import MyComponent from "./HomeComponents/MyComponent";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyComponent/>
      <NavigationButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});