import { StyleSheet, View } from "react-native";
import RepoList from "./RepoList";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
  main: {
    backgroundColor: "gray",
    height: "100%",
  },
});

const Main = () => {
  return (
    <View style={styles.main}>
      <AppBar />
      <RepoList />
    </View>
  );
};

export default Main;
