import { StyleSheet, TextInput, Text } from "react-native";
import { TextInputProps } from "react-native";
import { useField } from "formik";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
});

interface PropTypes extends TextInputProps {
  name: string;
}

const FormikTextInput = ({ name, ...props }: PropTypes) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(val) => helpers.setValue(val)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        // error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
