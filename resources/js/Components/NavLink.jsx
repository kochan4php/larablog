import { Link } from "@inertiajs/inertia-react";

const NavLink = ({ href, active, children }) => (
  <Link
    href={href}
    className={
      active
        ? "inline-flex items-center px-1 pt-1 border-b-2 border-slate-200 text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out"
        : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-base font-medium leading-5 hover:border-gray-300 focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
    }
  >
    {children}
  </Link>
);

export default NavLink;
