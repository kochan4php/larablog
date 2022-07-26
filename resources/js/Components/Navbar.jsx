// const Hamburger = () => (
//   <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       className="inline-block w-9 h-9 stroke-current"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M4 6h16M4 12h16M4 18h16"
//       ></path>
//     </svg>
//   </label>
// );

// const NavMenu = (props) => (
//   <>
//     <div className="md:hidden dropdown dropdown-end">
//       <Hamburger />
//       <ul
//         tabIndex="0"
//         className="mt-3 p-2 shadow menu menu-compact text-dark dropdown-content rounded-md w-52"
//       >
//         <RenderIfTrue isTrue={props.data.auth.user}>
//           <li>
//             <Link href={route("dashboard")} className="text-base">
//               My Dashboard
//             </Link>
//           </li>
//         </RenderIfTrue>
//         <RenderIfFalse isFalse={props.data.auth.user}>
//           <li>
//             <Link href={route("login")} className="text-base">
//               Log in
//             </Link>
//           </li>
//           <li>
//             <Link href={route("register")} className="text-base">
//               Register
//             </Link>
//           </li>
//         </RenderIfFalse>
//       </ul>
//     </div>
//     <div className="hidden md:block">
//       <ul className="flex gap-4 items-center">
//         <RenderIfTrue isTrue={props.data.auth.user}>
//           <li>
//             <Link
//               href={route("dashboard")}
//               className="text-lg hover:underline text-white"
//             >
//               My Dashboard
//             </Link>
//           </li>
//           <li>
//             <div className="dropdown dropdown-end">
//               <label
//                 tabIndex="0"
//                 className="text-lg transition-all duration-200 text-white cursor-pointer flex items-center justify-center gap-1 hover:bg-red-700 p-1.5 rounded-md outline-none border-none"
//               >
//                 <span>Kategori</span>
//                 <span>
//                   <FeatherIcon icon="chevron-down" />
//                 </span>
//               </label>
//               <ul
//                 tabIndex="0"
//                 className="dropdown-content menu p-2 shadow bg-base-100 rounded-md !text-slate-900 w-52 border border-slate-400"
//               >
//                 <For
//                   each={props.data.categories}
//                   render={(data, index) => (
//                     <li key={index}>
//                       <Link href="/">{data.name}</Link>
//                     </li>
//                   )}
//                 />
//               </ul>
//             </div>
//           </li>
//         </RenderIfTrue>
//         <RenderIfFalse isFalse={props.data.auth.user}>
//           <li>
//             <Link
//               href={route("login")}
//               className="text-lg hover:underline text-white"
//             >
//               Log in
//             </Link>
//           </li>
//           <li>
//             <Link
//               href={route("register")}
//               className="text-lg hover:underline text-white"
//             >
//               Register
//             </Link>
//           </li>
//         </RenderIfFalse>
//       </ul>
//     </div>
//   </>
// );

// const Navbar = (props) => (
//   <nav className="navbar fixed right-0 z-[999] left-0 top-0 text-white bg-danger">
//     <div className="container">
//       <div className="flex-1">
//         <Logo />
//       </div>
//       <div className="">
//         <NavMenu data={props.data} />
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Zoom from "@mui/material/Zoom";
import FeatherIcon from "feather-icons-react";
import { Link } from "@inertiajs/inertia-react";
import ApplicationLogo from "./ApplicationLogo";
import { For, RenderIfFalse, RenderIfTrue } from "@/utils";

const pages = ["Articles", "Trending", "Categories"];
const settings = ["Dashboard", "Logout"];

const Logo = () => (
  <div className="text-2xl flex gap-3 items-center">
    <ApplicationLogo className="block h-9 w-9 fill-current" />
    <Link href="/">Larablog</Link>
  </div>
);

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#dc2626", boxShadow: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Logo />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <FeatherIcon icon="menu" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <For
                each={pages}
                render={(page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                )}
              />
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Link href="/">Larablog</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <For
              each={pages}
              render={(page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    fontSize: 18,
                    ml: 2,
                    py: 0,
                  }}
                >
                  {page}
                </Button>
              )}
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Buka Profil" arrow TransitionComponent={Zoom}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: "45px",
                boxShadow:
                  "0 4px 6px -1px rgb(0 0 0 / 0.15), 0 2px 4px -2px rgb(0 0 0 / 0.15)",
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <For
                each={settings}
                render={(setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                )}
              />
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
