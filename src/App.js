import React from "react";
// import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "field required";
      if (!values.password) errors.password = "field required";
      return errors;
    },
  });

  // TODO: build you form here.
  // The email input field should have the ID emailField
  // The email error message should be within a div element that has the ID emailError
  // The password input field should have the ID pswField
  // The password error message should be within a div element that has an ID pswError
  // The submit button should have an ID submitBtn
  return (
    <div>
      <p>        
	Build A Formik Form assignment
      </p>
    
      <form onSubmit={formik.handleSubmit}>
        <div>
        	Email:
		<input
		  id="emailField"
		  type="text"
		  name="email"
		  onChange={formik.handleChange}
		  value={formik.values.email}
		/>
	</div>
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}
        <div>
        	Password:
		<input
		  id="pswField"
		  type="text"
		  name="password"
		  onChange={formik.handleChange}
		  value={formik.values.password}
		/>
        </div>
        <br />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
