import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import createRoute from "@/Helpers/createRoute";
import { For, RenderIfTrue } from "@/utils";
import { Head, Link } from "@inertiajs/inertia-react";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";

const routeDashboard = [
  createRoute(route("dashboard"), "get", "My Dashboard", "home"),
  createRoute(route("dashboard"), "get", "Notification", "bell"),
  createRoute(route("dashboard"), "get", "Saved Articles", "bookmark"),
  createRoute(
    "/dashboard/articles/create",
    "get",
    "Create Article",
    "plus-square"
  ),
  createRoute(route("dashboard"), "get", "Statistics", "bar-chart"),
  createRoute("/dashboard/profile", "get", "Settings", "settings"),
  createRoute(route("logout"), "post", "Log Out", "log-out"),
];

const Authenticated = ({ auth, children, title, flash }) => {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="min-h-screen bg-slate-200">
        <nav className="bg-danger !text-white">
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
                    active={
                      route().current("dashboard") ||
                      route().current("articles.show") ||
                      route().current("articles.edit")
                    }
                  >
                    Dashboard
                  </NavLink>
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:ml-6">
                <div className="ml-3 relative hover:bg-red-800 rounded-tr-xl rounded-bl-xl transition-all duration-200">
                  <Dropdown>
                    <Dropdown.Trigger>
                      <span className="inline-flex rounded-md">
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-2 border border-transparent text-base leading-4 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 gap-2"
                        >
                          <FeatherIcon icon="user" size={20} />
                          {auth.user.name}
                          <svg
                            className="h-4 w-4 fill-current"
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
                      <For
                        each={routeDashboard}
                        render={({ path, method, name, icon }, index) => (
                          <Dropdown.Link
                            href={path}
                            method={method}
                            as="button"
                            key={index}
                            className="flex items-center gap-3"
                          >
                            <FeatherIcon icon={icon} size={20} />
                            <div>{name}</div>
                          </Dropdown.Link>
                        )}
                      />
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
              <For
                each={routeDashboard}
                render={({ path, method, name, icon }, index) => (
                  <ResponsiveNavLink
                    href={path}
                    method={method}
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <FeatherIcon icon={icon} size={20} />
                    <div>{name}</div>
                  </ResponsiveNavLink>
                )}
              />
            </div>
          </div>
        </nav>

        <RenderIfTrue isTrue={flash?.message}>
          <div id="alert">
            <div className="py-5 bg-[#38BDF8] text-dark !flex !justify-between">
              <div className="container p-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-base md:text-lg !font-lexend">
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{flash?.message}</span>
                  </div>
                  <Link as="button">
                    <FeatherIcon icon="x" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </RenderIfTrue>

        <main className="py-8">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white text-slate-900 overflow-hidden shadow shadow-slate-400 sm:rounded-md">
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Authenticated;
