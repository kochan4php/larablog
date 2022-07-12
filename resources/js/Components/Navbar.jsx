import { Link } from "@inertiajs/inertia-react";

export default function Navbar(props) {
    return (
        <div class="navbar bg-slate-900 text-slate-100">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">Larablog</a>
            </div>
            <div class="flex-none gap-2">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="inline-block w-8 h-8 stroke-current"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                    <ul
                        tabindex="0"
                        class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-800 text-white rounded-md w-52"
                    >
                        {props.data.auth.user ? (
                            <>
                                <li>
                                    <Link
                                        href={route("dashboard")}
                                        className="text-base"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        className="text-base"
                                    >
                                        Log Out
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href={route("login")}
                                        className="text-base"
                                    >
                                        Log in
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href={route("register")}
                                        className="text-base"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
