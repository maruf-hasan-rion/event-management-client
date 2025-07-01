import { Link, NavLink } from "react-router";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/events">Events</NavLink>
      </li>
      <li>
        <NavLink to="/addEvent">Add Event</NavLink>
      </li>
      <li>
        <NavLink to="/myEvent">My Event</NavLink>
      </li>
      <li>
        <NavLink to="/login">Sign In</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-blue-500 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="p-2 font-semibold text-xl md:text-2xl">
            <img
              className="w-[40px] md:w-[52px] inline-block p-2 mr-2 rounded-full"
              src={logo}
              alt=""
            />
            Event Hero
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navOptions}</ul>
        </div>
        {/* <div className="navbar-end">
          {user && user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar w-fit"
              >
                <div className="w-16 rounded-full">
                  <img alt="user-img" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li className="justify-between font-bold">
                  <p>{user?.displayName}</p>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={logOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signUp" className="btn btn-neutral rounded-none">
              Join Us
            </Link>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
