const Select = ({ children, ...props }) => (
  <select
    className="truncate outline-none px-3 py-1.5 rounded-sm text-base !font-lexend ring-2 focus:ring-4 focus:ring-opacity-50 focus:ring-sky-500 transition-all selection:bg-rose-700 selection:text-rose-300 border-0 !bg-slate-50 !text-slate-900 mt-1 block w-full cursor-pointer"
    {...props}
  >
    {children}
  </select>
);

export default Select;
