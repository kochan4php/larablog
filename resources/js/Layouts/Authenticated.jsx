import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";

const Authenticated = ({ auth, children }) => {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <div className="min-h-screen">
      <nav className="border-b bg-primary !text-white border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between py-3">
            <div className="flex">
              <div className="shrink-0 flex items-center">
                <Link href="/">
                  <ApplicationLogo className="block h-10 w-10 fill-current text-white" />
                </Link>
              </div>
              <div className="hidden space-x-8 md:-my-px md:ml-10 md:flex">
                <NavLink
                  href={route("dashboard")}
                  active={route().current("dashboard")}
                >
                  Dashboard
                </NavLink>
              </div>
              <div className="hidden space-x-8 md:-my-px md:ml-10 md:flex">
                <NavLink href="/dashboard/posts">My Posts</NavLink>
              </div>
              <div className="hidden space-x-8 md:-my-px md:ml-10 md:flex">
                <NavLink href="/dashboard/profile">My Profile</NavLink>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:ml-6">
              <div className="ml-3 relative">
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-base leading-4 font-medium rounded-md focus:outline-none transition ease-in-out duration-150"
                      >
                        {auth.user.name}
                        <svg
                          className="ml-2 -mr-0.5 h-4 w-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </Dropdown.Trigger>
                  <Dropdown.Content>
                    <Dropdown.Link
                      href={route("logout")}
                      method="post"
                      as="button"
                    >
                      Log Out
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() =>
                  setShowingNavigationDropdown(
                    (previousState) => !previousState
                  )
                }
                className="inline-flex items-center justify-center p-1 rounded-tr-xl rounded-bl-xl hover:bg-slate-800 focus:outline-none focus:bg-slate-800 transition duration-150 ease-in-out"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={
                      !showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={
                      showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            (showingNavigationDropdown ? "block" : "hidden") + " md:hidden"
          }
        >
          <div className="py-2">
            <ResponsiveNavLink
              href={route("dashboard")}
              active={route().current("dashboard")}
            >
              Dashboard
            </ResponsiveNavLink>
            <ResponsiveNavLink href={"/dashboard/posts"}>
              My Posts
            </ResponsiveNavLink>
            <ResponsiveNavLink href={"/dashboard/profile"}>
              My Profile
            </ResponsiveNavLink>
            <ResponsiveNavLink method="post" href={route("logout")} as="button">
              Log Out
            </ResponsiveNavLink>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Authenticated;
