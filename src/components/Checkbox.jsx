import { useId } from "react";

const Checkbox = ({
  label = "",
  name = "",
  value = "",
  checked = false,
  onChange,
}) => {
  const id = useId();
  return (
    <div className="mr-5 my-2 ml-2">
      <input
        id={id}
        className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-1 cursor-pointer"
        type="checkbox"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="inline-block text-gray-800 text-base">
        {label}
      </label>
    </div>
  );
};
export { Checkbox };
