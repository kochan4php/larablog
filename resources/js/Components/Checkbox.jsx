const Checkbox = ({ name, value, handleChange }) => (
  <input
    type="checkbox"
    name={name}
    value={value}
    className="rounded text-indigo-600 shadow-sm focus:ring focus:ring-sky-500 focus:ring-opacity-70"
    onChange={(e) => handleChange(e)}
  />
);

export default Checkbox;
