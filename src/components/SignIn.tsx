import { Formik } from "formik";
import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => console.log("submitted")}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
