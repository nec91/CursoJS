// Clase Usuario
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

// Usuarios ya predefinidos
const user1 = new User("omar42", "qwerty25", "Omar", "Perez", 85, "male", 1);
const user2 = new User("marta55", "qwerty26", "Marta", "Lopez", 70, "female", 2);
const user3 = new User("pedro44", "qwerty27", "Pedro", "Martinez", 55, "male", 3);
const user4 = new User("alma14", "qwerty25", "Alma", "Iglesias", 60, "female", 4);
const user5 = new User("belen43", "qwerty28", "Belen", "Coleccia", 59, "female", 5);
const user6 = new User("Julio85", "qwerty29", "Julio", "Rodriguez", 57, "male", 6);
const user7 = new User("sandra77", "qwerty26", "Sandra", "Krivich", 52, "female", 7);

// Base de datos como array
let userDB = JSON.parse(localStorage.getItem('userDB')) || [user1, user2, user3, user4, user5, user6, user7];

// Guardar el array userDB en localStorage si no está ya presente
if (!localStorage.getItem('userDB')) {
    localStorage.setItem('userDB', JSON.stringify(userDB));
}

// Array vacío donde se almacena el ID del usuario logueado
let userLoggedId = JSON.parse(sessionStorage.getItem("userLoggedId")) || [];


//login

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginSubmit = document.getElementById("loginSubmit");
    const messageDiv = document.getElementById("message");

    loginSubmit.addEventListener("click", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value.toLowerCase().trim();
        const password = document.getElementById("password").value;


        let userDB = JSON.parse(localStorage.getItem('userDB'));
        const logResult = userDB.find((i) => i.user === username && i.password === password);
        if (!logResult) {
            showMessage("Usuario o contraseña incorrectos. Intente nuevamente.", "danger");
            return;
        }

        showMessage(`Bienvenid@ ${logResult.name} ${logResult.lastName}`, "success");

        // Guardar el ID del usuario logueado en sessionStorage
        userLoggedId.push(logResult.id);
        sessionStorage.setItem("userLoggedId", JSON.stringify(userLoggedId));


        setTimeout(() => {
            window.location.href = "calcForm.html";
        }, 2000);
    });
});


//registro

document.addEventListener("DOMContentLoaded", function () {
    const addForm = document.getElementById("addForm");
    const addSubmit = document.getElementById("addSubmit");
    const messageDiv = document.getElementById("message");

    addSubmit.addEventListener("click", function (e) {
        e.preventDefault();

        const user = document.getElementById("user").value.toLowerCase().trim();
        const password = document.getElementById("password1").value;
        const password2 = document.getElementById("password2").value;
        const name = document.getElementById("name").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const age = parseInt(document.getElementById("age").value, 10);
        const gender = document.getElementById("gender").value;

        // Obtener la base de datos actualizada desde localStorage
        let userDB = JSON.parse(localStorage.getItem('userDB'));

        // Validaciones
        const userExists = userDB.some((i) => i.user === user);
        const userError = userExists ? "El nombre de usuario ya existe, por favor intente nuevamente." : "";
        const emptyFields = user === "" || password === "" || password2 === "" || name === "" || lastName === "" || isNaN(age);
        const emptyFieldsError = emptyFields ? "Ingrese un valor correcto en todos los campos." : "";
        const passwordsMatch = password === password2;
        const passwordMatchError = passwordsMatch ? "" : "Las contraseñas no coinciden. Por favor, intente nuevamente.";


        if (userError || emptyFieldsError || passwordMatchError) {
            showMessage(userError || emptyFieldsError || passwordMatchError, "danger");
            return;
        }


        let id = userDB.length + 1;
        let newUser = new User(user, password, name, lastName, age, gender, id);
        userDB.push(newUser);

        // Actualizar localStorage con el nuevo usuario
        localStorage.setItem('userDB', JSON.stringify(userDB));

        showMessage("Usuario creado correctamente.", "success");

   
        setTimeout(() => {
            window.location.href = "loginForm.html";
        }, 2000);
    });
});



function showMessage(message, type) {
    const messageDiv = document.getElementById("message");
    messageDiv.className = `alert alert-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.display = "block";
    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 3000);
};
