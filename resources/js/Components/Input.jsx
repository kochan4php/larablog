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
  defaultValue,
}) => {
  const input = useRef();

  useEffect(() => {
    if (isFocused) input.current.focus();
  }, []);

  return (
    <input
      className={`truncate outline-none px-3 py-1.5 rounded-sm text-base !font-lexend ring-2 focus:ring-4 focus:ring-opacity-50 focus:ring-sky-500 transition-all selection:bg-rose-700 selection:text-rose-300 border-0 !bg-slate-50 !text-slate-900 ${className}`}
      type={type}
      name={name}
      value={value}
      ref={input}
      autoComplete={autoComplete}
      required={required}
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
