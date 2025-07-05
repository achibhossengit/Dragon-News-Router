import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input bg-base-200" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input bg-base-200" placeholder="Password" />
            <button className="btn btn-neutral mt-4">Login</button>
            <div>
              <p>Don't have an account yet? Please <Link to={'/auth/register'} className="link text-secondary font-bold">Register</Link></p>
            </div>
          </fieldset>
        </div>
      </div>{" "}
    </div>
  );
};

export default Login;
