import { useId } from "react";

const Input = ({
  label = "",
  type = "text",
  name = "",
  value = "",
  onChange,
  error = false,
  errorMessage = "",
}) => {
  const id = useId();
  return (
    <div className="my-4 mx-2">
      <label
        htmlFor={id}
        className="block text-base font-medium text-slate-700"
      >
        {label}:
        <input
          id={id}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          className="mt-1 block w-full px-3 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </label>
      {error && <span className="text-red-600">{errorMessage}</span>}
    </div>
  );
};

export { Input };
