const Label = ({ forInput, value, className, children }) => (
  <label
    htmlFor={forInput}
    className={`block font-medium text-base ${className}`}
  >
    {value ? value : children}
  </label>
);

export default Label;
