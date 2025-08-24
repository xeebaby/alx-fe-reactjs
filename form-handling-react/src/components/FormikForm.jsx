import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">User Registration (Formik)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Formik form submitted:", values);
          alert("User registered successfully with Formik!");
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div className="mb-3">
              <label className="block font-medium">Username</label>
              <Field name="username" className="w-full p-2 border rounded" />
              <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
            </div>

            <div className="mb-3">
              <label className="block font-medium">Email</label>
              <Field name="email" type="email" className="w-full p-2 border rounded" />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            <div className="mb-3">
              <label className="block font-medium">Password</label>
              <Field name="password" type="password" className="w-full p-2 border rounded" />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
