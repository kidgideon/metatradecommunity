import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/signup.css";
import useAuth from "../config/Hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";

const Signup = () => {
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    identificationNumber: "",
    phoneNumber: "",
    dateOfBirth: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      username,
      identificationNumber,
      phoneNumber,
      dateOfBirth,
    } = formData;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const result = await signup({
      email,
      password,
      firstName,
      lastName,
      username,
      identificationNumber,
      phoneNumber,
      dateOfBirth,
    });

    if (result.success) {
      // Signup function will already toast & redirect to login
      return;
    } else {
      toast.error("❌ Account creation failed.");
    }
  };

  const handleGoogleLogin = async () => {
    const result = await loginWithGoogle();
    if (result.success) {
      toast.success("🎉 Signed in with Google!");
      navigate("/home");
    }
  };

  return (
    <div className="signup-interface">
      <NavBar />

      <div className="signupForm">
        <div className="topLayer">
          <span>Create Portfolio</span>
        </div>

        <form className="formInputsSign" onSubmit={handleSignup}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          {/* New Professional Fields */}
          <input
            type="text"
            name="identificationNumber"
            placeholder="Identification Number (SSN/Passport)"
            value={formData.identificationNumber}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />

          <div className="passwordInputWrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="togglePassword" onClick={() => setShowPassword((v) => !v)}>
              <i className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
            </span>
          </div>

          <div className="passwordInputWrapper">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span className="togglePassword" onClick={() => setShowConfirm((v) => !v)}>
              <i className={`fa-solid ${showConfirm ? "fa-eye" : "fa-eye-slash"}`}></i>
            </span>
          </div>

          <div className="termsRow">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>

          <button className="signupBtn" type="submit">
            <i className="fa-solid fa-user-plus"></i> create portfolio
          </button>

          <div className="orDivider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          {/* Still allow Google login for existing users */}
          <button className="googleBtn" type="button" onClick={handleGoogleLogin}>
            <i className="fa-brands fa-google"></i> Continue with Google
          </button>

          <div className="loginRow">
            Already have a portfolio? <Link to="/login">access portfolio</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
