import React from "react";
import {
  SignUpButton,
  SignUpFormInput,
  SignUpFormDiv,
} from "./styledComponents/SignUpFormStyles";

const SignUpForm = ({ formValues, setFormValues, setUserAndResetForm }) => {
  return (
    <div className="sign-up-form-container">
      <h1>Create Account</h1>
      <SignUpFormDiv action="">
        <SignUpFormInput
        onChange={(e) =>
          setFormValues({ ...formValues, firstName: e.target.value })
        }
        type="text"
        value={formValues.firstName}
        placeholder="First Name"
        />
        <SignUpFormInput 
        type="text"
        placeholder="Last Name"
        onChange={(e) =>
          setFormValues({ ...formValues, lastName: e.target.value })
        }
        value={formValues.lastName}
        />
        <SignUpFormInput 
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setFormValues({ ...formValues, email: e.target.value })
        }
        value={formValues.email} 
        />
        <SignUpFormInput 
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setFormValues({ ...formValues, password: e.target.value })
        }
        value={formValues.password}
        />
        <SignUpFormInput 
        type="password"
        placeholder="Re-Type Password"
        onChange={(e) =>
          setFormValues({ ...formValues, retypedPassword: e.target.value })
        }
        value={formValues.retypedPassword} 
        />
        <SignUpButton onClick={() => setUserAndResetForm(formValues)}>Sign Up</SignUpButton>
      </SignUpFormDiv>
    </div>
  );
};
export default SignUpForm;