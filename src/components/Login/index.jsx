import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { signUp, signIn } from "../../utils/auth";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(false);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const validate = (values) => {
    const errors = {};

    // Email
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    // Password
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    // Extra validation for sign-up
    if (isSignInForm) {
      if (!values.firstName) {
        errors.firstName = "First name is required";
      } else if (!/^[A-Za-z]+$/.test(values.firstName)) {
        errors.firstName = "First name must contain only letters";
      } else if (values.firstName.length < 3) {
        errors.firstName = "First name must be at least 3 letters";
      }

      if (!values.lastName) {
        errors.lastName = "Last name is required";
      } else if (!/^[A-Za-z]+$/.test(values.lastName)) {
        errors.lastName = "Last name must contain only letters";
      } else if (values.lastName.length < 3) {
        errors.lastName = "Last name must be at least 3 letters";
      }
    }

    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const { email, password } = values;
    try {
      const result = isSignInForm
        ? await signUp(email, password)
        : await signIn(email, password);

      if (result.error) {
        alert(result.error.message);
      } else {
        alert(`${isSignInForm ? "Sign Up" : "Sign In"} successful`);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full absolute z-20">
      <div className="bg-black opacity-70 p-8 rounded-lg text-white w-1/4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {!isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        <Formik
          initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-4">
              {isSignInForm && (
                <>
                  <div>
                    <label htmlFor="firstName" className="block text-left mb-1">
                      First Name
                    </label>
                    <Field
                      id="firstName"
                      name="firstName"
                      placeholder="Jane"
                      className="w-full p-2 rounded bg-gray-800 text-white"
                    />
                    {errors.firstName && touched.firstName && (
                      <div className="text-red-500 text-sm mt-1">{errors.firstName}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-left mb-1">
                      Last Name
                    </label>
                    <Field
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      className="w-full p-2 rounded bg-gray-800 text-white"
                    />
                    {errors.lastName && touched.lastName && (
                      <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>
                    )}
                  </div>
                </>
              )}

              <div>
                <label htmlFor="email" className="block text-left mb-1">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-left mb-1">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                />
                {errors.password && touched.password && (
                  <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                )}
              </div>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded mt-2 cursor-pointer"
              >
                Submit
              </button>

              <p className="text-center text-sm mt-4">
                {!isSignInForm ? (
                  <>
                    New to Netflix?{" "}
                    <span
                      onClick={toggleSignInForm}
                      className="text-blue-500 underline cursor-pointer"
                    >
                      Sign Up
                    </span>
                  </>
                ) : (
                  <>
                    Already a user?{" "}
                    <span
                      onClick={toggleSignInForm}
                      className="text-blue-500 underline cursor-pointer"
                    >
                      Sign In
                    </span>
                  </>
                )}
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
