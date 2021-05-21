
import {
  SignUpButton,
  SignUpFormInput,
  SignUpFormDiv,
} from "./styledComponents/SignUpFormStyles";

const SignUpForm = (props) => {
  return (
    <div className="sign-up-form-container">
      <h1>Create Account</h1>
      <SignUpFormDiv action="">
        <SignUpFormInput
          onChange={(e) => props.setFirstName(e.target.value)}
          type="text"
          name="firstName"
          value={props.firstName}
          placeholder="First Name"
        />
        <SignUpFormInput type="text" name="lastName" placeholder="Last Name" />
        <SignUpFormInput type="email" name="email" placeholder="Email" />
        <SignUpFormInput type="password" name="password" placeholder="Password" />
        <SignUpFormInput type="password" name="password" placeholder="Re-Type Password" />
        <SignUpButton>Sign Up</SignUpButton>
      </SignUpFormDiv>
    </div>
  );
};
export default SignUpForm;