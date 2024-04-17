export const datos = [
    {
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
    "notaFinal": 5
  }];
  export const datosObjeto = datos.reduce((objeto, estudiante) => {
    for (const clave in estudiante) {
      if (!objeto[clave]) {
        objeto[clave] = [];
      }
      objeto[clave].push(estudiante);
    }
    return objeto;
  }, {});