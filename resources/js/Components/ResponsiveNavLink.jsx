import { Link } from "@inertiajs/inertia-react";

const ResponsiveNavLink = ({
  method = "get",
  as = "a",
  href,
  active = false,
  children,
  className,
}) => (
  <Link
    method={method}
    as={as}
    href={href}
    className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 text-white ${
      active
        ? "border-indigo-400 bg-slate-800 focus:outline-none focus:text-indigo-800 focus:bg-slate-800 focus:border-indigo-700"
        : "border-transparent hover:bg-slate-800 hover:border-gray-300"
    } font-medium focus:outline-none transition duration-150 ease-in-out text-lg ${className}`}
  >
    {children}
  </Link>
);

export default ResponsiveNavLink;
