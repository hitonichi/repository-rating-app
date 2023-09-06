import { Formik } from "formik";
import SignInForm from "./SignInForm";

interface IFormValue {
  username: string;
  password: string;
}

const SignIn = () => {
  const initialFormValue: IFormValue = { username: "", password: "" };

  return (
    <Formik
      initialValues={initialFormValue}
      onSubmit={(val: IFormValue) => console.log("submitted", val, typeof val)}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
