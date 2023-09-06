import { StyleSheet, View } from "react-native";
import { Routes, Route, Navigate } from "react-router-native";

import RepoList from "./RepoList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  main: {
    backgroundColor: "gray",
    height: "100%",
    width: "100%",
  },
});

const Main = () => {
  return (
    <View style={styles.main}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepoList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <RepoList /> */}
    </View>
  );
};

export default Main;
