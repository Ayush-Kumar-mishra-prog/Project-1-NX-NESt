"use client";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

import { assets } from "../Assets/assests";
import { useEffect, useState } from "react";
import {
  AnnoyedIcon,
  MenuIcon,
  User2Icon,
  UserCircle,
  XIcon,
  Menu,
  X,
  ChevronDown,
  ShoppingBag,
  User,
  LogOut,
  LayoutDashboard,
  LogInIcon,
} from "lucide-react";
import { getSettingsAssetUrl, useUserContext } from "@/context/UserContext";
import api from "@/app/lib/axios";
import { useRouter } from "next/navigation";
import Section from "./Section";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
import * as React from "react";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import CarMedia from '@mui/material/CardMedia';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import Image from "next/image";
// import AdbIcon from '@mui/icons-material/Adb';

const navItems = [
  { name: "Home", href: "/", type: "link", id: 1 },
  {
    name: "Ecommerce Applications",
    category: "Ecommerce",
    type: "category",
    id: 2,
  },
  { name: "SaaS Applications", category: "SaaS", type: "category", id: 3 },
  { name: "Mobile Applications", category: "Mobile", type: "category", id: 4 },
  { name: "Website templates", category: "Web", type: "category", id: 5 },
  { name: "A1 Premium", href: "/projects", type: "link", id: 6 },
];
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [handleLoginUser, setHandleLoginUser] = useState(false);
  const [showDashboardButton, setShowDashboardButton] = useState(false);
  const { user, setUser, settingsData } = useUserContext();
  const profileRef = React.useRef(null);
  const categoryRef = React.useRef(null);
  const router = useRouter();
  const logoSrc = settingsData.logo
    ? getSettingsAssetUrl(settingsData.logo)
    : assets.logo.src;

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure to logout");
    if (!confirmLogout) return;

    try {
      const response = await api.post("/auth/api/v1/auth/logout");
      if (response.status === 200) {
        setUser(null);
        router.push("/authentication");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      setUser(null);
      router.push("/authentication");
    }
  };

  useEffect(() => {
    if (user) {
      const role = user.role;
      setShowDashboardButton(role);
      setHandleLoginUser(true);
    } else {
      setHandleLoginUser(false);
    }
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }

      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // useEffect(()=>{
  //   if(!loggedIn){
  //     setHandleLoginUser(false)
  //   }else{
  //     setHandleLoginUser(true)
  //   }
  // },[handleLoginUser])

  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    //     <>
    //       {/* <div
    //         className="flex w-full items-center justify-center gap-3 p-5"
    //         style={{ backgroundColor: settingsData.navColor }}
    //       >
    //         // <img src={logoSrc} className="h-10 w-auto max-w-full" alt="logo" />

    //       </div> */}

    //       {/* <nav
    //         className="flex w-full flex-wrap items-center justify-between gap-2 px-3 py-2"
    //         style={{ backgroundColor: settingsData.navbarColor }}
    //       >
    //         <button onClick={() => setSidebar(!sidebar)} className="md:hidden">
    //           {sidebar ? (
    //             <XIcon size={28} />
    //           ) : (
    //             <MenuIcon
    //               size={28}
    //               className="cursor-pointer"
    //               style={{ color: settingsData.navText }}
    //             />
    //           )}
    //         </button>

    //         {navItems.map((item) =>
    //           item.type === "link" ? (
    //             <Link
    //               key={item.id}
    //               href={item.href}
    //               className="hidden rounded-md px-2 py-2 text-lg hover:bg-black/15 sm:px-3 sm:text-lg md:block lg:text-lg"
    //               style={{ color: settingsData.navText }}
    //             >
    //               {item.name}
    //             </Link>
    //           ) : (
    //             <button
    //               key={item.id}
    //               type="button"
    //               onClick={() => setActiveCategory(item.category)}
    //               className={`hidden rounded-md px-2 py-2 text-lg sm:px-3 sm:text-lg md:inline-flex lg:text-lg ${
    //                 activeCategory === item.category
    //                   ? "bg-white/20"
    //                   : "hover:bg-black/15"
    //               }`}
    //               style={{ color: settingsData.navText }}
    //             >
    //               {item.name}
    //             </button>
    //           ),
    //         )}
    //         <div
    //           className={`fixed top-0 left-0 z-50 h-screen w-4/5 gap-2 px-3 py-2 transform transition-transform duration-300 md:hidden ${sidebar ? "translate-x-0" : "-translate-x-full"}`}
    //           style={{ backgroundColor: settingsData.navbarColor }}
    //         >
    //           <div className="flex justify-end p-4">
    //             <button onClick={() => setSidebar(false)} className="">
    //               <XIcon
    //                 size={28}
    //                 className="text-white border rounded-md border-gray-300"
    //               />
    //             </button>
    //           </div>

    //           {navItems.map((item) =>
    //             item.type === "link" ? (
    //               <Link
    //                 key={item.id}
    //                 href={item.href}
    //                 className="block rounded-md px-2 py-2 text-2xl hover:bg-black/15 sm:px-3 sm:text-2xl md:hidden lg:text-2xl"
    //                 style={{ color: settingsData.navText }}
    //               >
    //                 {item.name}
    //               </Link>
    //             ) : (
    //               <button
    //                 key={item.id}
    //                 type="button"
    //                 onClick={() => {
    //                   setActiveCategory(item.category);
    //                   setSidebar(false);
    //                 }}
    //                 className={`block w-full rounded-md px-2 py-2 text-left text-2xl text-white hover:bg-blue-800 sm:px-3 sm:text-2xl lg:text-2xl ${
    //                   activeCategory === item.category ? "bg-white/20" : ""
    //                 }`}
    //                 style={{ color: settingsData.navText }}
    //               >
    //                 {item.name}
    //               </button>
    //             ),
    //           )}
    //         </div>
    //         {sidebar && (
    //           <div
    //             onClick={() => setSidebar(false)}
    //             className="fixed inset-0 bg-black/50 md:hidden"
    //           />
    //         )}
    //         {
    //           showDashboardButton==="seller" && (
    //             <Link
    //               className="m-1 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 sm:text-base lg:text-xl"
    //               href="/seller/home"
    //             >
    //               Dashboard
    //             </Link>
    //           )
    //         }
    //         {
    //           showDashboardButton==="admin" && (
    //             <Link
    //               className="m-1 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 sm:text-base lg:text-xl"
    //               href="/admin/dashboard"
    //             >
    //               Dashboard
    //             </Link>
    //           )
    //         }

    //         {handleLoginUser ? (
    //           <div
    //             onClick={handleLogout}
    //             className="bg-white text-zinc-800 p-3 rounded-2xl hover:bg-blue-700 hover:text-white cursor-pointer flex justify-center items-center flex-row ga-2"
    //           >
    //             <UserCircle size={18} />
    //            <span className="">{user?.username || "User"}</span>

    //           </div>
    //         ) : (
    //           <Link
    //             className="m-1 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 sm:text-base lg:text-xl"
    //             href="/authentication"
    //           >
    //             Login
    //           </Link>
    //         )}

    //       </nav> */}

    //   {/* <Box sx={{ flexGrow: 1 }}>
    //       <FormGroup>
    //         <FormControlLabel
    //           control={
    //             <Switch
    //               checked={auth}
    //               onChange={handleChange}
    //               aria-label="login switch"
    //             />
    //           }
    //           label={auth ? 'Logout' : 'Login'}
    //         />
    //       </FormGroup>
    //       <AppBar position="static">
    //         <Toolbar>
    //           <IconButton
    //             size="large"
    //             edge="start"
    //             color="inherit"
    //             aria-label="menu"
    //             sx={{ mr: 2 }}
    //           >
    //             <MenuIcon />
    //           </IconButton>
    //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //             Photos
    //           </Typography>
    //           {auth && (
    //             <div>
    //               <IconButton
    //                 size="large"
    //                 aria-label="account of current user"
    //                 aria-controls="menu-appbar"
    //                 aria-haspopup="true"
    //                 onClick={handleMenu}
    //                 color="inherit"
    //               >
    //                 <UserCircle />
    //               </IconButton>
    //               <Menu
    //                 id="menu-appbar"
    //                 anchorEl={anchorEl}
    //                 anchorOrigin={{
    //                   vertical: 'top',
    //                   horizontal: 'right',
    //                 }}
    //                 keepMounted
    //                 transformOrigin={{
    //                   vertical: 'top',
    //                   horizontal: 'right',
    //                 }}
    //                 open={Boolean(anchorEl)}
    //                 onClose={handleClose}
    //               >
    //                 <MenuItem onClick={handleClose}>Profile</MenuItem>
    //                 <MenuItem onClick={handleClose}>My account</MenuItem>
    //               </Menu>
    //             </div>
    //           )}
    //         </Toolbar>
    //       </AppBar>
    //     </Box> */}

    // {/* <img src={logoSrc} className="h-10 w-auto max-w-full" alt="logo" /> */}
    //  <AppBar position="static" style={{ backgroundColor: settingsData.navColor }}>
    //       <Container maxWidth="xl">
    //         <Toolbar disableGutters>

    //           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //             <IconButton
    //               size="large"
    //               aria-label="account of current user"
    //               aria-controls="menu-appbar"
    //               aria-haspopup="true"
    //               onClick={handleOpenNavMenu}
    //               color="inherit"
    //             >
    //               <MenuIcon />
    //             </IconButton>
    //             <Menu
    //               id="menu-appbar"
    //               anchorEl={anchorElNav}
    //               anchorOrigin={{
    //                 vertical: 'bottom',
    //                 horizontal: 'left',
    //               }}
    //               keepMounted
    //               transformOrigin={{
    //                 vertical: 'top',
    //                 horizontal: 'left',
    //               }}
    //               open={Boolean(anchorElNav)}
    //               onClose={handleCloseNavMenu}
    //               sx={{ display: { xs: 'block', md: 'none' } }}
    //             >
    //               {pages.map((page) => (
    //                 <MenuItem key={page} onClick={handleCloseNavMenu}>
    //                   <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
    //                 </MenuItem>
    //               ))}
    //             </Menu>
    //           </Box>

    //           <Typography
    //             variant="h5"
    //             noWrap
    //             component="a"
    //             href="#app-bar-with-responsive-menu"
    //             sx={{
    //               mr: 2,
    //               display: { xs: 'flex', md: 'none' },
    //               flexGrow: 1,
    //               fontFamily: 'monospace',
    //               fontWeight: 700,
    //               letterSpacing: '.3rem',
    //               color: 'inherit',
    //               textDecoration: 'none',
    //             }}
    //           >
    //             LOGO
    //           </Typography>
    //           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    //             {pages.map((page) => (
    //               <Button
    //                 key={page}
    //                 onClick={handleCloseNavMenu}
    //                 sx={{ my: 2, color: 'white', display: 'block' }}
    //               >
    //                 {page}
    //               </Button>
    //             ))}
    //           </Box>
    //           <Box sx={{ flexGrow: 0 }}>
    //             <Tooltip title="Open settings">
    //               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

    //               {
    //                 handleLoginUser ? <div className="rounded-full bg-gray-400 px-3">
    //            <p className="text-white">{user?.full_name.charAt(0).toUpperCase() || "U"}</p>
    //                 </div>:(
    //                   <div className="rounded-full bg-gray-400 p-2">
    //                     <User2Icon className="text-white" />
    //                   </div>
    //                 )
    //               }
    //                 {/* <div className="rounded-full bg-gray-400 px-3">
    //                 <p className="text-white">R</p>
    //                 </div> */}
    //               </IconButton>
    //             </Tooltip>
    //             <Menu
    //               sx={{ mt: '45px' }}
    //               id="menu-appbar"
    //               anchorEl={anchorElUser}
    //               anchorOrigin={{
    //                 vertical: 'top',
    //                 horizontal: 'right',
    //               }}
    //               keepMounted
    //               transformOrigin={{
    //                 vertical: 'top',
    //                 horizontal: 'right',
    //               }}
    //               open={Boolean(anchorElUser)}
    //               onClose={handleCloseUserMenu}
    //             >
    //               {/* {settings.map((setting) => (
    //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
    //                   <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
    //                 </MenuItem>
    //               ))} */}
    // <MenuItem  onClick={handleCloseUserMenu}>
    //                   <div className="">
    //                      <Link
    //               className="text-center mb-2"
    //               href="/seller/home"
    //             >
    //               Dashboard
    //             </Link>

    //         {handleLoginUser ? (
    //           <p className="text-center" onClick={handleLogout}>Logout</p>
    //         ) : (
    //           <Link
    //             className="m-1 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 text-center"
    //             href="/authentication"
    //           >
    //             Login
    //           </Link>
    //         )}

    //             </div>
    //                 </MenuItem>

    //             </Menu>
    //           </Box>
    //         </Toolbar>
    //       </Container>
    //     </AppBar>

    //       <ProjectCard activeCategory={activeCategory} />
    //        <Section />
    //     </>

    <>
      <nav
        className="w-full  text-white shadow-md"
        style={{ backgroundColor: settingsData.navColor }}
      >
        <div className="mx-auto flex h-17.5 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* LOGO */}
          <img src={logoSrc} className="h-10 w-auto max-w-full" alt="logo" />

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="text-sm font-medium uppercase tracking-wide transition hover:text-purple-200"
              style={{ color: settingsData.navText }}
            >
              Home
            </a>

            <a
              href="#"
              className="text-sm font-medium uppercase tracking-wide transition hover:text-purple-200"
              style={{ color: settingsData.navText }}
            >
              Recents projects
            </a>

            <a
              href="#"
              className="text-sm font-medium uppercase tracking-wide transition hover:text-purple-200"
              style={{ color: settingsData.navText }}
            >
              Cart
            </a>

            <a
              href="#"
              className="text-sm font-medium uppercase tracking-wide transition hover:text-purple-200"
              style={{ color: settingsData.navText }}
            >
              Orders
            </a>

            {/* CATEGORIES */}
            <div ref={categoryRef} className="relative">
              <button
                onClick={() => {
                  setIsCategoryOpen(!isCategoryOpen);
                  setIsProfileOpen(false);
                }}
                className="flex items-center gap-1 text-sm font-medium uppercase tracking-wide transition hover:text-purple-200"
                style={{ color: settingsData.navText }}
              >
                Categories
                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCategoryOpen && (
                <div className="absolute left-1/2 top-10 z-50 w-52 -translate-x-1/2 overflow-hidden rounded-lg border border-purple-100 bg-white py-2 text-gray-800 shadow-xl">
                  <a
                    href="#"
                    className="block px-4 py-2.5 text-sm transition hover:bg-purple-50 hover:text-purple-700 bg-purple-100 text-purple-700 font-semibold"
                  >
                    SaaS Projects
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2.5 text-sm transition hover:bg-purple-50 hover:text-purple-700"
                  >
                    Website Templates
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2.5 text-sm transition hover:bg-purple-50 hover:text-purple-700"
                  >
                    Full Stack Projects
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2.5 text-sm transition hover:bg-purple-50 hover:text-purple-700"
                  >
                    AI Projects
                  </a>
                </div>
              )}
            </div>

            <a
              href="/createSeller"
              className="text-sm font-medium uppercase tracking-wide transition hover:text-purple-200"
            >
              Become Seller
            </a>
            <a
              href="#"
              className="text-sm font-medium uppercase tracking-wide transition hover:text-purple-200"
            >
              A1 Premium
            </a>
          </div>

          {/* RIGHT PROFILE */}
          <div ref={profileRef} className="relative hidden md:block">
            <button
              onClick={() => {
                setIsProfileOpen(!isProfileOpen);
                setIsCategoryOpen(false);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-300 bg-purple-500 text-lg font-semibold shadow-md transition hover:bg-purple-400 cursor-pointer"
            >
              <p className="text-white">
                {user?.full_name.charAt(0).toUpperCase() || (
                  <User2Icon size={18} />
                )}
              </p>
            </button>

            {/* PROFILE DROPDOWN */}
            {isProfileOpen && (
              <div className="absolute right-0 top-12 z-50 w-52 overflow-hidden rounded-xl border border-purple-100 bg-white shadow-2xl">
                <div className="border-b border-gray-100 px-4 py-3">
                  <p className="text-sm font-semibold text-gray-800">
                    Welcome back
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Manage your account
                  </p>
                </div>

                <div className="p-2">
                  {showDashboardButton === "seller" && (
                    <Link
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
                      href="/seller/home"
                    >
                      Dashboard
                    </Link>
                  )}

                  {showDashboardButton === "admin" && (
                    <Link
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
                      href="/admin/dashboard"
                    >
                      Dashboard
                    </Link>
                  )}

                  {handleLoginUser ? (
                    <>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-zinc-950 hover:bg-white hover:text-red-700"
                      >
                        <LogOut size={18} />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-zinc-900 hover:text-white hover:bg-purple-700"
                        href="/authentication"
                      >
                        <LogInIcon size={18} />
                        Login
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 transition hover:bg-purple-600 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="border-t border-purple-600 bg-purple-800 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              <a
                href="/"
                className="rounded-lg px-3 py-3 text-sm font-medium uppercase hover:bg-purple-700"
              >
                Home
              </a>

              <a
                href="#"
                className="rounded-lg px-3 py-3 text-sm font-medium uppercase hover:bg-purple-700"
              >
                Recent Projecs
              </a>
              <a
                href="/"
                className="rounded-lg px-3 py-3 text-sm font-medium uppercase hover:bg-purple-700"
              >
                Cart
              </a>

              <a
                href="#"
                className="rounded-lg px-3 py-3 text-sm font-medium uppercase hover:bg-purple-700"
              >
                Orders
              </a>

              {/* MOBILE CATEGORIES */}
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium uppercase hover:bg-purple-700"
              >
                <span>Categories</span>

                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCategoryOpen && (
                <div className="ml-3 border-l border-purple-500 pl-3">
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-sm text-purple-100 hover:bg-purple-700"
                  >
                    SaaS Projects
                  </a>

                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-sm text-purple-100 hover:bg-purple-700"
                  >
                    Website Templates
                  </a>

                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-sm text-purple-100 hover:bg-purple-700"
                  >
                    Full Stack Projects
                  </a>

                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-sm text-purple-100 hover:bg-purple-700"
                  >
                    AI Projects
                  </a>
                </div>
              )}

              <a
                href="/createSeller"
                className="rounded-lg px-3 py-3 text-sm font-medium uppercase hover:bg-purple-700"
              >
                Become Seller
              </a>

              <a
                href="#"
                className="rounded-lg px-3 py-3 text-sm font-medium uppercase hover:bg-purple-700"
              >
                A1 Premium
              </a>

              {/* MOBILE PROFILE */}
              <div className="mt-3 border-t border-purple-600 pt-3">
                {showDashboardButton === "seller" && (
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
                    href="/seller/home"
                  >
                    Dashboard
                  </Link>
                )}

                {showDashboardButton === "admin" && (
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
                    href="/admin/dashboard"
                  >
                    Dashboard
                  </Link>
                )}

                {handleLoginUser ? (
                  <>
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-zinc-950 hover:bg-white hover:text-red-700"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-zinc-950 hover:bg-purple-700">
                      <LogInIcon size={18} />
                      Login
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <ProjectCard activeCategory={activeCategory} />
      {/* <ProjectGrid /> */}
      <Section />
    </>
  );
};

export default Home;
