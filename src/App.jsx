import { Input } from "./components/Input";
import { Checkbox } from "./components/Checkbox";
import { CheckboxGroup } from "./components/CheckboxGroup";
import { ButtonGroup } from "./components/ButtonGroup";
import { Button } from "./components/Button";
import { useForm } from "./hooks/useForm";
import {
  PASSWORD_ERROR_MESSAGE,
  Email_ERROR_MESSAGE,
} from "./constants/ERROR-MESSAGES";

const App = () => {
  const {
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
  } = useForm();
  if (success) {
    return (
      <div className="max-w-sm mx-auto bg-white shadow py-5 px-6 my-8 rounded">
        <h1 className="text-base font-semibold text-green-500">
          Thank you for your time and consideration
        </h1>
      </div>
    );
  }
  return (
    <div className="max-w-sm mx-auto bg-white shadow py-5 px-6 my-8 rounded">
      <form>
        <Input
          label="First Name"
          name="firstName"
          type="text"
          value={firstName}
          onChange={handleChange}
        />
        <Input
          label="Last Name"
          name="lastName"
          type="text"
          value={lastName}
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          value={email}
          error={emailError}
          errorMessage={Email_ERROR_MESSAGE}
          onChange={handleChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          error={passwordError}
          errorMessage={PASSWORD_ERROR_MESSAGE}
          onChange={handleChange}
        />
        <CheckboxGroup label="Gender">
          <Checkbox
            label="man"
            value="man"
            name="gender"
            checked={gender === "man"}
            onChange={handleChange}
          />
          <Checkbox
            label="woman"
            value="woman"
            name="gender"
            checked={gender === "woman"}
            onChange={handleChange}
          />
        </CheckboxGroup>
        <ButtonGroup>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={
              !Object.keys(formState).every((item) => formState[item] != "")
            }
          >
            Submit
          </Button>
          <Button onClick={handleReset}>Reset</Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default App;
