import { StyleSheet, View, Text } from "react-native";
import "../global.css";
export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <Text className=" text-2xl">Hey Hello World Nadeem</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
