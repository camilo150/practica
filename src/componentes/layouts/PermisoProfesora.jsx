import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom

function PermisoProfesora() {
  const permisos = [
    { name: 'monica', contrasena: '1234' },
    { name: 'pepe', contrasena: '246' }
  ];
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const redireccion = useNavigate(); // Obtén la función de redirección

  const validacion = () => {
    const usuario = permisos.find(usuario => usuario.name === nombreUsuario && usuario.contrasena === contrasena);
    if (usuario) {
      setUsuarioAutenticado(usuario);
      redireccion("/registrar"); // Redirige a la ruta "/Estudiante" si las credenciales son correctas
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="container">
      {!usuarioAutenticado ? (
        <div className="login-container">
          <h2>Iniciar sesión</h2>
          <label>Nombre de usuario:</label>
          <input type="text" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} />
          <br />
          <label>Contraseña:</label>
          <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
          <br />
          <button onClick={validacion}>Iniciar sesión</button>
        </div>
      ) : (
        <div className="welcome-container">
          <h2>Bienvenido, {usuarioAutenticado.name}!</h2>
          <p>Tus permisos están activos.</p>
        </div>
      )}
    </div>
  );
}

export default PermisoProfesora;
