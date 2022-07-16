import { RenderIfFalse, RenderIfTrue } from "@/utils";
import { Link } from "@inertiajs/inertia-react";
import ApplicationLogo from "./ApplicationLogo";

const Logo = () => (
  <div className="text-2xl flex gap-3 items-center">
    <ApplicationLogo className="block h-9 w-auto fill-current" />
    <Link href="/">Larablog</Link>
  </div>
);

const Hamburger = () => (
  <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="inline-block w-9 h-9 stroke-current"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  </label>
);

const NavMenu = (props) => (
  <>
    <div className="md:hidden dropdown dropdown-end">
      <Hamburger />
      <ul
        tabindex="0"
        className="mt-3 p-2 shadow menu menu-compact dropdown-content text-white bg-danger rounded-md w-52"
      >
        <RenderIfTrue isTrue={props.data.auth.user}>
          <li>
            <Link href={route("dashboard")} className="text-base">
              My Dashboard
            </Link>
          </li>
          <li>
            <Link href={route("logout")} method="post" className="text-base">
              Log Out
            </Link>
          </li>
        </RenderIfTrue>
        <RenderIfFalse isFalse={props.data.auth.user}>
          <li>
            <Link href={route("login")} className="text-base">
              Log in
            </Link>
          </li>
          <li>
            <Link href={route("register")} className="text-base">
              Register
            </Link>
          </li>
        </RenderIfFalse>
      </ul>
    </div>
    <div className="hidden md:block">
      <ul className="flex gap-4 items-center">
        <RenderIfTrue isTrue={props.data.auth.user}>
          <li>
            <Link
              href={route("dashboard")}
              className="text-lg hover:underline text-white"
            >
              My Dashboard
            </Link>
          </li>
          <li>
            <Link
              href={route("logout")}
              method="post"
              className="text-lg hover:underline text-white"
            >
              Log Out
            </Link>
          </li>
        </RenderIfTrue>
        <RenderIfFalse isFalse={props.data.auth.user}>
          <li>
            <Link
              href={route("login")}
              className="text-lg hover:underline text-white"
            >
              Log in
            </Link>
          </li>
          <li>
            <Link
              href={route("register")}
              className="text-lg hover:underline text-white"
            >
              Register
            </Link>
          </li>
        </RenderIfFalse>
      </ul>
    </div>
  </>
);

const Navbar = (props) => (
  <nav className="navbar text-white bg-danger">
    <div className="container">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="">
        <NavMenu data={props.data} />
      </div>
    </div>
  </nav>
);

export default Navbar;
