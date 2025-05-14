import React, { useState } from "react";
import { Formik, Field, Form } from "formik";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(false);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div className="flex justify-center items-center h-screen w-full absolute z-20">
      <div className="bg-black opacity-70 p-8 rounded-lg text-white w-1/4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {!isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password:"",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
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
                placeholder="jane@acme.com"
                type="email"
                className="w-full p-2 rounded bg-gray-800 text-white"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-left mb-1">
                Password
              </label>
              <Field
                id="pwd"
                name="Password"
                placeholder="***************"
                type="password"
                className="w-full p-2 rounded bg-gray-800 text-white"
              />
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded mt-2"
            >
              Submit
            </button>
            <p onClick={toggleSignInForm}>
              {!isSignInForm ? (
                <>
                  Already a user ?
                  <span className="text-blue-500 underline cursor-pointer pl-2">
                    Sign In
                  </span>
                </>
              ) : (
                <>
                  New to Netflix ?
                  <span className="text-blue-500 underline cursor-pointer pl-2">
                    Sign Up
                  </span>
                </>
              )}
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
