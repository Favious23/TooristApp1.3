import firebase from "firebase/app";
import "firebase/auth";

export const logoutUser = () => {
  firebase.auth().signOut();
};

export const signInUser = async ({ name, email, password }) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    firebase.auth().currentUser.updateProfile({
      displayName: name
    });

    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          error: "E-mail ya esta en uso."
        };
      case "auth/invalid-email":
        return {
          error: "Formato E-mail no valido."
        };
      case "auth/weak-password":
        return {
          error: "La contraseña es demasiado débil."
        };
      case "auth/too-many-requests":
        return {
          error: "Demasiadas solicitudes. Vuelve a intentarlo en un minuto."
        };
      default:
        return {
          error: "Comprueba tu conexión a Internet."
        };
    }
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Formato de E-mail no valido"
        };
      case "auth/user-not-found":
      case "auth/wrong-password":
        return {
          error: "Dirección de correo electrónico o contraseña no válidos."
        };
      case "auth/too-many-requests":
        return {
          error: "Demasiadas solicitudes. Vuelve a intentarlo en un minuto."
        };
      default:
        return {
          error: "Comprueba tu conexión a Internet."
        };
    }
  }
};

export const sendEmailWithPassword = async email => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Formato de E-mail no valido"
        };
      case "auth/user-not-found":
        return {
          error: "El usuario con este correo electrónico no existe."
        };
      case "auth/too-many-requests":
        return {
          error: "Demasiadas solicitudes. Vuelve a intentarlo en un minuto."
        };
      default:
        return {
          error: "Comprueba tu conexión a Internet."
        };
    }
  }
};
