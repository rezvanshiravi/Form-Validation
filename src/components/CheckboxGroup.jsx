const CheckboxGroup = ({ label = "", children }) => {
  return (
    <div className="my-4 mx-2">
      <label className="block  text-base font-medium text-slate-700">
        {label}:
      </label>
      <div className="flex justify-start ">{children}</div>
    </div>
  );
};
export { CheckboxGroup };
