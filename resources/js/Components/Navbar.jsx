import FeatherIcon from "feather-icons-react";
import { For, RenderIfFalse, RenderIfTrue } from "@/utils";
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
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
        tabIndex="0"
        className="mt-3 p-2 shadow menu menu-compact text-dark dropdown-content rounded-md w-52"
      >
        <RenderIfTrue isTrue={props.data.auth.user}>
          <li>
            <Link href={route("dashboard")} className="text-base">
              My Dashboard
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
            <div className="dropdown dropdown-end">
              <label
                tabIndex="0"
                className="text-lg transition-all duration-200 text-white cursor-pointer flex items-center justify-center gap-1 hover:bg-red-700 p-1.5 rounded-md outline-none border-none"
              >
                <span>Kategori</span>
                <span>
                  <FeatherIcon icon="chevron-down" />
                </span>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-md !text-slate-900 w-52 border border-slate-400"
              >
                <For
                  each={props.data.categories}
                  render={(data, index) => (
                    <li key={index}>
                      <Link href="/">{data.name}</Link>
                    </li>
                  )}
                />
              </ul>
            </div>
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
