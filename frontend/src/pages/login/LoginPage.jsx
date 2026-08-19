import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post(
        // "http://localhost:3000/login",
        "https://zerodha-clone-backend-j86o.onrender.com/login",
        formData,
      );

      localStorage.setItem("token", response.data.token);

      // window.location.href = `http://localhost:5174/?token=${response.data.token}`;
      window.location.href = `https://my-zerodha-clone-dashboard.netlify.app/?token=${response.data.token}`;
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container-fluid bg-primary py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <h2 className="mb-2">Login to Zerodha</h2>

                  <p className="text-muted mb-0">
                    Enter your credentials to continue
                  </p>
                </div>

                {message && (
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Password</label>

                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </form>

                <div className="text-center mt-4">
                  <p className="text-muted mb-0">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-decoration-none">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
