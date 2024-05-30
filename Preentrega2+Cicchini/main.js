//constructor de usuarios
class User {
  constructor(user, password, name, lastName, age, gender, id) {
    this.user = user;
    this.password = password;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.id = id;
  }
}

// debugger

//usuarios ya predefinidos
const user1 = new User("omar42", "qwerty25", "Omar", "Perez", 85, "male", 1);
const user2 = new User("marta55", "qwerty26", "Marta", "Lopez", 70, "female", 2);
const user3 = new User("pedro44", "qwerty27", "Pedro", "Martinez", 55, "male", 3);
const user4 = new User("alma14", "qwerty25", "Alma", "Iglesias", 60, "female", 4);
const user5 = new User("belen43", "qwerty28", "Belen", "Coleccia", 59, "female", 5);
const user6 = new User("Julio85", "qwerty29", "Julio", "Rodriguez", 57, "male", 6);
const user7 = new User("sandra77", "qwerty26", "Sandra", "Krivich", 52, "female", 7);

//base de datos como array
let userDB = [user1, user2, user3, user4, user5, user6, user7];

//array vacio donde se almacena el id del usuario loggeado
let userLoggedId = [];

//funcion para agregar un usuario
function addUser() {
  let user = prompt("Ingrese un nombre de usuario").toLocaleLowerCase().trim();
  if (userDB.some((i) => i.user === user)) {
    return console.log(
      "El nombre de usuario ya existe, por favor intente nuevamente."
    );
  }
  let password = prompt("Ingrese una contraseña");
  let name = prompt("Ingrese su nombre").trim();
  let lastName = prompt("Ingrese su apellido").trim();
  let age = parseInt(prompt("Ingrese su edad"));
  if (user === "" || password === "" || name === "" || lastName === "" || isNaN(age)) {
    return console.log("Ingrese un valor correcto.");
  }
  let gender = prompt(`Ingrese "H" si es hombre, o "M"si es mujer`)
    .toLowerCase()
    .trim();
  if (gender === "h" || gender === "m") {
    console.log("Usuario creado correctamente.");
  } else {
    console.log("ingrese un valor correcto.");
  }

  let id = userDB.length + 1;
  let newUser = new User(user, password, name, lastName, age, gender, id);
  userDB.push(newUser);

  return start()
}

//funcion para loggearse
function logIn() {
  let userLog = prompt("Bienvenido, ingrese su usuario.")
    .toLocaleLowerCase()
    .trim();
  const logResult = userDB.find((i) => i.user === userLog);

  if (logResult === undefined) {
    console.log("Usuario incorrecto, intente nuevamente.");
    return;
  } else {
    console.log("check");
  }
  let passLog = prompt("Ingrese su contraseña");
  if (logResult.password != passLog) {
    console.log("Contraseña incorrecta.");
    return;
  } else {
    console.log(`Bienvenid@ ${logResult.name} ${logResult.lastName}  `);
    userLoggedId = [];
    return userLoggedId.push(logResult.id);
  }
}

//funcion calculo para genero masculino
function male() {
  let user = userDB[userLoggedId - 1];
  let aportes = parseInt(prompt("¿Cuantos años de aportes tiene?"));
  if (isNaN(aportes)) {
    console.log("Ingrese un dato válido");
  } else if (user.age < 65) {
    let restaEdad = 65 - user.age;
    console.log(
      `Requisitos de jubilación insuficioentes. La edad mínima necesaria es de 65 años. Restan: ${restaEdad} año/s.`
    );
  } else if (aportes < 30) {
    let restaAportes = 30 - aportes;
    console.log(
      `Requisitos de jubilación insuficioentes. Año/s restante/s de aportes: ${restaAportes}`
    );
  } else {
    return console.log(
      `Felicidades ${user.name} ${user.lastName}, cumple todos los requisitos para jubilarse.`
    );
  }
}

//funcion calculo para genero femenino
function female() {
  let user = userDB[userLoggedId - 1];
  let aportes = parseInt(prompt("¿Cuantos años de aportes tiene?"));
  if (isNaN(aportes)) {
    console.log("Ingrese un dato válido");
  } else if (user.age < 60) {
    let restaEdad = 60 - user.age;
    console.log(
      `Requisitos de jubilación insuficioentes. La edad mínima necesaria es de 60 años. Restan: ${restaEdad} año/s.`
    );
  } else if (aportes < 30) {
    let restaAportes = 30 - aportes;
    console.log(
      `Requisitos de jubilación insuficioentes. Año/s restante/s de aportes: ${restaAportes}`
    );
  } else {
    return console.log(
      `Felicidades ${user.name} ${user.lastName}, cumple todos los requisitos para jubilarse.`
    );
  }
}

//funcion que combina calculo de ambos generos y ejecuta dependiendo del mismo
function calculator() {
  let user = userDB[userLoggedId - 1];
  if (user.gender == "male") {
    male();
  } else {
    female();
  }
}

//funcion para iniciar el programa
function start() {
  let welcome = confirm(
    `¡Bienvenido! ¿Usted se encuentra registrado? Responda "Aceptar" por si, o "Cancelar" por no. `
  );
  switch (welcome) {
    case false:
      alert("Regístrese a continuación");
      addUser();
      break;
    case true:
      logIn();
    case true:
      calculator();
      break;
  }
}


