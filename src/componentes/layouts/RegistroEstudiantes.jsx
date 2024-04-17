import React, { useState } from 'react';

function RegistroEstudiantes() {
  const datosIniciales = [{
    "documento": 1355161139,
    "nombre": "Cirstoforo",
    "telefono": "471 455 4896",
    "direccion": "Alapayevsk",
    "correo": "clearmonth0@chronoengine.com",
    "notaFinal": 2
  }, {
    "documento": 818014108,
    "nombre": "Reeta",
    "telefono": "352 142 5001",
    "direccion": "Lófos",
    "correo": "rrichin1@free.fr",
    "notaFinal": 1
  }, {
    "documento": 119811498,
    "nombre": "Tann",
    "telefono": "297 498 5610",
    "direccion": "Ageoshimo",
    "correo": "tdahlberg2@theguardian.com",
    "notaFinal": 5
  }, {
    "documento": 1518564325,
    "nombre": "Warden",
    "telefono": "186 548 4307",
    "direccion": "Sugihmukti",
    "correo": "wfell3@dmoz.org",
    "notaFinal": 2
  }, {
    "documento": 1885078892,
    "nombre": "Noni",
    "telefono": "114 897 3489",
    "direccion": "Sävedalen",
    "correo": "nblackburne4@samsung.com",
    "notaFinal": 1
  }, {
    "documento": 1047672079,
    "nombre": "Ivonne",
    "telefono": "151 698 9945",
    "direccion": "København",
    "correo": "iweymont5@rambler.ru",
    "notaFinal": 4
  }, {
    "documento": 140877192,
    "nombre": "Ingmar",
    "telefono": "762 552 9538",
    "direccion": "Agen",
    "correo": "ibickerstaffe6@pen.io",
    "notaFinal": 3
  }, {
    "documento": 1619763753,
    "nombre": "Natty",
    "telefono": "931 760 5650",
    "direccion": "Cikadu",
    "correo": "ngrinnikov7@wired.com",
    "notaFinal": 1
  }, {
    "documento": 1259791740,
    "nombre": "Don",
    "telefono": "179 899 4380",
    "direccion": "Poroj",
    "correo": "dsambedge8@umn.edu",
    "notaFinal": 5
  }, {
    "documento": 2306407765,
    "nombre": "Jordanna",
    "telefono": "987 753 4385",
    "direccion": "Wucun",
    "correo": "jheffernan9@ezinearticles.com",
    "notaFinal": 5 /* Aquí van más estudiantes */}];
  

  const [estudiantes, setEstudiantes] = useState([]);
  const [filtroNota, setFiltroNota] = useState('');
  const [filtroDocumento, setFiltroDocumento] = useState('');

  const handleChangeNota = (event) => {
    setFiltroNota(event.target.value);
  };

  const handleChangeDocumento = (event) => {
    setFiltroDocumento(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const nuevoEstudiante = {
      documento: formData.get('documento'),
      nombre: formData.get('nombre'),
      telefono: formData.get('telefono'),
      direccion: formData.get('direccion'),
      correo: formData.get('correo'),
      notaFinal: parseFloat(formData.get('notaFinal'))
    };
    setEstudiantes([...estudiantes, nuevoEstudiante]);
  };

  const estudiantesCompletos = [...datosIniciales, ...estudiantes];

  let estudiantesFiltrados = estudiantesCompletos;
  if (filtroNota === '<3') {
    estudiantesFiltrados = estudiantesFiltrados.filter(estudiante => estudiante.notaFinal < 3);
  } else if (filtroNota === '>3') {
    estudiantesFiltrados = estudiantesFiltrados.filter(estudiante => estudiante.notaFinal > 3);
  }
  if (filtroDocumento) {
    estudiantesFiltrados = estudiantesFiltrados.filter(estudiante =>
      estudiante.documento.includes(filtroDocumento)
    );
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto',
}}>
    <h2 style={{ textAlign: 'center' }}>Registro de Estudiantes</h2>
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Documento:
        <input type="text" name="documento" style={{ marginLeft: '10px' }} />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Nombre:
        <input type="text" name="nombre" style={{ marginLeft: '20px' }} />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Teléfono:
        <input type="text" name="telefono" style={{ marginLeft: '7px' }} />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Dirección:
        <input type="text" name="direccion" style={{ marginLeft: '3px' }} />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Correo:
        <input type="email" name="correo" style={{ marginLeft: '18px' }} />
      </label>
      <label style={{ display: 'block', marginBottom: '20px' }}>
        Nota Final:
        <input type="number" name="notaFinal" style={{ marginLeft: '7px' }} />
      </label>
      <button type="submit" style={{ marginLeft: '150px', padding: '5px 15px', fontSize: '16px' }}>Agregar Estudiante</button>
    </form>

    <h2 style={{ textAlign: 'center' }}>Estudiantes Registrados</h2>
    <div style={{ marginBottom: '20px' }}>
      <label style={{ marginRight: '10px' }}>
        Filtrar por Nota:
        <select value={filtroNota} onChange={handleChangeNota} style={{ marginLeft: '10px' }}>
          <option value="">Todos</option>
          <option value="<3">Perdieron (&lt;3)</option>
          <option value=">3">Ganaron (&gt;3)</option>
        </select>
      </label>
      <label>
        Filtrar por Documento:
        <input type="text" value={filtroDocumento} onChange={handleChangeDocumento} style={{ marginLeft: '10px' }} />
      </label>
    </div>
    
    <ul>
      {/* Mostrar la lista de estudiantes filtrada según los filtros seleccionados */}
      {estudiantesFiltrados.map(estudiante => (
        <li key={estudiante.documento} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <strong>{estudiante.nombre}</strong> - Documento: {estudiante.documento} - Nota Final: {estudiante.notaFinal}
        </li>
      ))}
    </ul>
 
    </div>
  );
}

export default RegistroEstudiantes;
