import { View, Text, StyleSheet, Image } from "react-native";
import { RepoData } from "../type";

import RepoStatDisplay from "./RepoStatDisplay";

interface PropTypes {
  data: RepoData;
}

const styles = StyleSheet.create({
  flexCol: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  pad16: {
    padding: 12,
  },
  pad8: {
    padding: 8,
  },
  flexContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-evenly",
  },
  alignLeft: {
    justifyContent: "flex-start",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  langTag: {
    padding: 6,
    borderRadius: 4,
    backgroundColor: "#0164dc",
    color: "white",
  },
});

const RepoItem = (props: PropTypes) => {
  const repo = props.data;
  return (
    <View style={[styles.flexCol, styles.pad16, { backgroundColor: "white" }]}>
      <View style={[styles.flexContainer, styles.alignLeft]}>
        <Image
          style={styles.logo}
          source={{
            uri: repo.ownerAvatarUrl,
          }}
        ></Image>
        <View style={[styles.flexCol]}>
          <Text style={{ fontWeight: "bold" }}>{repo.fullName}</Text>
          <Text>{repo.description}</Text>
          <View style={{ alignItems: "baseline" }}>
            <Text style={styles.langTag}>{repo.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <RepoStatDisplay
          title={"Stars"}
          data={repo.stargazersCount}
        ></RepoStatDisplay>
        <RepoStatDisplay
          title={"Forks"}
          data={repo.forksCount}
        ></RepoStatDisplay>
        <RepoStatDisplay
          title={"Reviews"}
          data={repo.reviewCount}
        ></RepoStatDisplay>
        <RepoStatDisplay
          title={"Rating"}
          data={repo.ratingAverage}
        ></RepoStatDisplay>
      </View>
    </View>
  );
};

export default RepoItem;
