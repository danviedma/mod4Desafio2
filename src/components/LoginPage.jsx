import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setMessageError("Todos los campos son obligatorios");
      return false;
    } else if (password.length < 6) {
      setMessageError("La contraseña debe tener al menos 6 caracteres");

      return false;
    } else if (email !== "correo@gmail.com" || password !== "1234567") {
      setMessageError("Usuario o contraseña incorrectos");
      return false;
    }
    setMessageError("");
    alert("Login correcto");
    return true;
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div style={{ width: "60%" }}>
        <h2 className="mb-4 text-center">Login</h2>
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
          <button type="submit" className="btn btn-primary w-100">
            Ingresar
          </button>
          {messageError && (
            <div className="alert alert-danger mt-3">{messageError}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
