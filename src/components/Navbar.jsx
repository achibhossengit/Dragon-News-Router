import { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
  const handleLogout = () => {
    console.log("try to loginout");
    logoutUser()
      .then(() => {
        alert("You are successfully loged out!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className="w-12 h-12 rounded-full" src={`${user?.photoURL || userIcon}`} alt="" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10 ">
            LogOut
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-10 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
