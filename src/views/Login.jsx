import { useState } from "react";
import NavBar from "../components/NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const validarForm = (e) => {
    e.preventDefault();
    if (!email || !password || password.length < 6) {
      setError(true);
      Swal.fire({
        title: 'Error!',
        text: 'Ingresa los datos correctamente',
        icon: 'error',
        confirmButtonText: 'Muy bien!'
      })
      return;
    }
    setError(false);
    navigate("/home");
  };

  return (
    <div>
      <NavBar></NavBar>

      <div className="my-4 d-flex justify-content-center">
        <Form onSubmit={(e) => validarForm(e)} style={{ width: "30rem" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
            />
            <Form.Text className="text-muted">
              Nunca compartiremos tus datos con nadie.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <div className="d-flex">
            <Form.Control
              type={showPass ? 'text' : 'password'}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
            <Button onClick={()=> setShowPass(!showPass)} variant="primary">{showPass? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}</Button>

            </div>
          </Form.Group>
          <Button variant="primary" type="submit">
            Entrar
          </Button>
          {error ? (
            <p className="text-danger">Ingrese los datos correctamente!</p>
          ) : null}
        </Form>
      </div>
    </div>
  );
}
