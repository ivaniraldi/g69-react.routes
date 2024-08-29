import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
        <h1>UsuariosDB</h1>
        <br />
        <Link to="/home"><button type="button" className="btn btn-primary">Entrar</button></Link>
    </div>
  )
}
