import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input type="text" className="input bg-base-200" placeholder="Name" />
            
            {/* Photo url */}
            <label className="label">Photo URL</label>
            <input type="text" className="input bg-base-200" placeholder="Enter your hosted Photo url" />
            
            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input bg-base-200" placeholder="Email" />
            
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input bg-base-200" placeholder="Password" />

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
          </fieldset>
        </div>
      </div>{" "}
    </div>
  );
};

export default Register;
