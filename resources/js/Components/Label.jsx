const Label = ({ forInput, value, className, children }) => (
  <label
    htmlFor={forInput}
    className={`block font-medium text-sm text-gray-700 ` + className}
  >
    {value ? value : children}
  </label>
);

export default Label;
