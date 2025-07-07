import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
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
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-base-200"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input bg-base-200"
              placeholder="Password"
            />
            <button className="btn btn-neutral mt-4">Login</button>
            <div>
              <p>
                Don't have an account yet? Please{" "}
                <Link
                  to={"/auth/register"}
                  className="link text-secondary font-bold"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default Login;
