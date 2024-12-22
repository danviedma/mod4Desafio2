import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messageError, setMessageError] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || confirmPassword === "") {
      setMessageError("Todos los campos son obligatorios");
      return false;
    } else if (password !== confirmPassword) {
      setMessageError("Las contraseñas no coinciden");
      return false;
    } else if (password.length < 6) {
      setMessageError("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
    alert("Formulario enviado correctamente");
    setMessageError("");
    return true;
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div style={{ width: "60%" }}>
        <h2 className="mb-4 text-center">Register</h2>
        <form onSubmit={validarDatos}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
          {messageError && (
            <div className="alert alert-danger mt-3" role="alert">
              {messageError}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
