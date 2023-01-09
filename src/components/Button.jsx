const Button = ({ type, disabled, onClick, children }) => {
  const className =
    type == "submit"
      ? "bg-blue-500 hover:bg-blue-700 text-white font-bold border-blue-700 disabled:bg-gray-300 "
      : "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent";
  return (
    <>
      <button
        className={className + "tx-base py-2 px-4 mx-4 border  rounded"}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
export { Button };
