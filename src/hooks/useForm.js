import { useState } from "react";
const useForm = () => {
  const initialFormValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "man",
  };
  const initialError = {
    passwordError: false,
    emailError: false,
  };
  const [formState, setFormData] = useState(initialFormValue);
  const [error, setError] = useState(initialError);
  const [success, setsuccess] = useState(false);
  const { firstName, lastName, email, password, gender } = formState;
  const { passwordError, emailError } = error;
  const handleChange = (e) => {
    setFormData({ ...formState, [e.target.name]: e.target.value });
  };
  const handleReset = (e) => {
    setFormData(initialFormValue);
    setError(initialError);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passwordRegExp =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const errors = { ...initialError };
    if (!email.match(emailRegExp)) {
      errors.emailError = true;
    }
    if (!password.match(passwordRegExp)) {
      errors.passwordError = true;
    }

    if (Object.keys(errors).every((item) => errors[item] == false))
      setsuccess(true);
    else setError(errors);
  };
  return {
    firstName,
    lastName,
    email,
    password,
    gender,
    passwordError,
    emailError,
    formState,
    success,
    handleChange,
    handleReset,
    handleSubmit,
  };
};
export { useForm };
