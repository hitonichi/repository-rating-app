import { StyleSheet, Text, View } from "react-native";
import { processNumberString } from "../utils";

interface PropTypes {
  title: string;
  data: number;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  data: {
    fontWeight: "bold",
  },
  title: {
    color: "gray",
  },
});

const RepoStatDisplay = ({ title, data }: PropTypes) => {
  return (
    <View style={styles.container}>
      <Text style={styles.data}>{processNumberString(data)}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default RepoStatDisplay;
