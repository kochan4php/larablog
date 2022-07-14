import { useEffect, useRef } from "react";

const Input = ({
  type = "text",
  name,
  value,
  className,
  autoComplete,
  required,
  isFocused,
  handleChange,
  placeholder,
}) => {
  const input = useRef();

  useEffect(() => {
    if (isFocused) input.current.focus();
  }, []);

  return (
    <input
      className={`search-input truncate outline-none px-4 py-1.5 rounded-sm bg-gray-900 text-base md:text-lg ring-2 focus:ring-4 focus:ring-sky-500 transition-all selection:bg-rose-700 selection:text-rose-300 border-0 ${className}`}
      type={type}
      name={name}
      value={value}
      ref={input}
      autoComplete={autoComplete}
      required={required}
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
    />
  );
};

export default Input;
