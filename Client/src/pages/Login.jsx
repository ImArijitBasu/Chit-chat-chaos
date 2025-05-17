import { useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import bgImg from "../assets/login_bg.webp";
const Login = () => {
  const { user, signIn, googleSignIn, createUser } = useAuth();
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  if (user) {
    return <Navigate to="/home" replace />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signIn(email, password);
    } catch {
      setError("Invalid email or password 😞");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    try {
      await createUser(email, password);
      handleLogin();
    } catch (err) {
      setError("Registration failed. Try again 😞");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
    } catch {
      setError("Google sign-in failed 😞");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-ash/20 p-4"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="bg-white/30 backdrop-blur-md border border-white/40 p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegister ? "Register" : "Login"}
        </h2>

        {isRegister ? (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-charcoal/80"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-charcoal/80"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-charcoal/80"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Register
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-charcoal/80"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-charcoal/80"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login with Email
            </button>
          </form>
        )}

        <div className="mt-6 text-center">
          <p className="mb-3 text-gray-600">OR</p>
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border border-ash py-2 rounded-lg hover:bg-ash/20 transition"
          >
            Sign in with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-ash">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => {
              setError("");
              setIsRegister(!isRegister);
            }}
            className="text-blue font-semibold hover:underline"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
