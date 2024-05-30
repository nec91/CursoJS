const password = "12345Abc";


const user = "usuario1";

const userValidation = () => {
  let validation = false;
  let userInit = prompt("Ingrese su usuario").toLocaleLowerCase();

  if (userInit !== user) {
    console.log("Usuario incorrecto.");
  } else {
    validation = true;
  }
  return validation;
};

const passValidation = () => {
  let validation = false;
  let passInit = prompt("Ingrese su contraseña.");

  if (passInit !== password) {
    console.log("Contraseña incorrecta.");
  } else {
    validation = true;
  }
  return validation;
};

let validation = () => {
  if (userValidation() === true) {
    passValidation();
    console.log("Bienvenido " + user);
  } else {
    console.log("Intente nuevamente");
  }
};

validation();

const aportesNecesarios = 30;
const edadHombre = 65;
const edadMujer = 60;

let persona = prompt(
  "Bienvenido, querés saber cuanto falta para poder jubilarte? Ingresá si sos hombre o mujer:"
);

function jubilarHombre() {
  let edad = parseInt(prompt("Ingrese su edad"));
  let aportes = parseInt(prompt("Ingrese cantidad de años de aportes"));

  if (isNaN(edad) || isNaN(aportes)) {
    alert("Ingrese un dato válido");
  } else if (edad < edadHombre) {
    restaEdad = edadHombre - edad;
    alert(`Aun te faltan ${restaEdad} años para poder jubilarte`);
  } else if (aportes < aportesNecesarios) {
    restaAportes = aportesNecesarios - aportes;
    alert(`Aun te faltan ${restaAportes} años de aportes`);
  } else {
    alert("Felicidades, podés jubilarte");
  }
}

function jubilarMujer() {
  let edad = parseInt(prompt("Ingrese su edad"));
  let aportes = parseInt(prompt("Ingrese cantidad de años de aportes"));
  if (isNaN(edad) || isNaN(aportes)) {
    alert("Ingrese un dato válido");
  } else if (edad < edadMujer) {
    restaEdad = edadMujer - edad;
    alert(`Aun te faltan ${restaEdad} años para poder jubilarte`);
  } else if (aportes < aportesNecesarios) {
    restaAportes = aportesNecesarios - aportes;
    alert(`Aun te faltan ${restaAportes} años de aportes`);
  } else {
    alert("Felicidades, podés jubilarte");
  }
}

while (persona != " ") {
  switch (persona.toUpperCase()) {
    case "HOMBRE":
      jubilarHombre();
      break;
    case "MUJER":
      jubilarMujer();
      break;
    default:
      alert("Escriba correctamente");
  }
  persona = prompt(
    "Bienvenido, querés saber cuanto falta para poder jubilarte? Ingresá si sos hombre o mujer:"
  );
}
