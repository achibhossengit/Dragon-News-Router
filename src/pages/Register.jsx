import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    console.log({ name, email, photoURL, password });
    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input bg-base-200"
              placeholder="Name"
            />

            {/* Photo url */}
            <label className="label">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              className="input bg-base-200"
              placeholder="Enter your hosted Photo url"
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-base-200"
              placeholder="Email"
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input bg-base-200"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
            <div>
              <p>
                I already have an account ? Please{" "}
                <Link
                  to={"/auth/login"}
                  className="link text-secondary font-bold"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default Register;
