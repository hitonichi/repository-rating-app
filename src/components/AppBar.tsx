import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 16 + Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
  scrollWrapper: {
    rowGap: 24,
  },
  navText: {
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 8,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollWrapper} horizontal>
        <Pressable onPress={() => console.log("object")}>
          <Text style={styles.navText}>Repositories</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.navText}>Sign in</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
