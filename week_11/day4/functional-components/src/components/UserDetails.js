import React from "react";

export default function UserDetails({ formValues }) {
  return (
    <div>
          <h1>{formValues.firstName}</h1>
          <h1>{formValues.lastName}</h1>
          <h1>{formValues.email}</h1>
          <h1>{formValues.password}</h1>
    </div>
  );
}