import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li className="hover:bg-slate-100 mx-2 rounded">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:bg-slate-100 mx-2 rounded">
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li className="hover:bg-slate-100 mx-2 rounded">
        <NavLink to="/order/salad">Order</NavLink>
      </li>
      <li className="hover:bg-slate-100 mx-2 rounded">
        <NavLink to="/secret">Secret</NavLink>
      </li>
      <li className="outline outline-1 hover:bg-slate-100 rounded ">
        <NavLink to="/dashboard/mycart">
          <FaShoppingCart></FaShoppingCart>
          <div className="badge badge-secondary">+{cart?.length || 0}</div>
        </NavLink>
      </li>
      {user ? (
        <>
          <li
            id="navLogInOut"
            className="outline outline-1 hover:bg-slate-100 hover:text-black mx-2 rounded "
            onClick={handleLogOut}
          >
            <NavLink>LOGOUT</NavLink>
          </li>
        </>
      ) : (
        <>
          <li
            id="navLogInOut"
            className="outline outline-1 hover:bg-slate-100 mx-2 rounded"
          >
            <NavLink to="/login">LOGIN</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div
        id="activeNav"
        className="navbar fixed z-10  max-w-screen-xl text-white bg-black bg-opacity-30"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/1000/svg"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-white bg-black bg-opacity-30 hover:text-white w-52 shadow rounded-box "
            >
              {navOptions}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case ">
            <div className="w-10 rounded-full">
              <img src="../../../../public/logo.png" alt="" />
            </div>
            <div>
              <h2 className="text-xl"> Barakah Bites </h2>
              <p className="italic text-left">Restaurant</p>
            </div>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navOptions}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
