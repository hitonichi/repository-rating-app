import { Pressable, StyleSheet, Text, View } from "react-native";
import FormikTextInput from "./FormTextInput";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  formEle: {
    height: 40,
    margin: 12,
    borderRadius: 4,
    padding: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
  },
  submitBtn: {
    backgroundColor: "#0954a5",
  },
});

interface PropTypes {
  onSubmit: () => void;
}

const SignInForm = ({ onSubmit }: PropTypes) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={[styles.formEle, styles.input]}
        name="username"
        placeholder="Your username"
      />
      <FormikTextInput
        style={[styles.formEle, styles.input]}
        name="password"
        placeholder="Your password"
        textContentType="password"
        secureTextEntry={true}
      />
      <Pressable
        style={[styles.formEle, styles.submitBtn]}
        onPress={() => onSubmit()}
      >
        <Text
          style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
