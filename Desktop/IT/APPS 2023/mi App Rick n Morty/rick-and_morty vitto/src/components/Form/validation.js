
// const userName = (value) => {
// // -  el nombre de usuario tiene que ser un email _(explora validaciónes REGEX en internet!)_.
// // -  el nombre de usuario no puede estar vacío.
// // -  el nombre de usuario no puede tener más de 35 caracteres.
// let emailpattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
// if(!emailpattern.test(value)){
//     alert("El nombre de usuario tiene que ser un email")
// }if(!emailpattern){
//     alert("Rellenar el campo username")
// }if(emailpattern.length > 35){
//     alert("El nombre de usuario no puede contener mas de 35 catacteres")
// }

// }

// const passWord = (value) => {
// //     -  la contraseña tiene que tener al menos un número.
// // -  la contraseña tiene que tener una longitud entre 6 y 10 caracteres.

// }

const validation = (userData) => {
    let errors = {};                            //  le iremos agregando el estado de username y password
if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(userData.username)){
    errors.username = "El nombre de usuario debe ser un email";
}if(!userData.username){
    errors.username = "Este campo no puede estar vacío"
}if(userData.username.length > 36){
    errors.username = "El nombre de usuario no puede contener mas de 35 caracteres";
}if(!userData.password.match(/\d/)){
    errors.password = "La contraseña debe contener por lo menos un número"
}if(userData.password.lenght < 6 || userData.password.lenght > 10){
    errors.password = "La contraseña debe contener entre 6 y 10 caracteres"
}
return errors;
}

export default validation;