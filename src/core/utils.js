export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return "El correo electrónico no puede estar vacío.";
  if (!re.test(email)) return "¡Vaya! Necesitamos una dirección de correo electrónico válida.";

  return "";
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return "La contraseña no puede estar vacía.";

  return "";
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return "El nombre no puede estar vacío.";

  return "";
};

export const rutValidator = rut => {
  if (!rut || rut.length <= 0) return "El Rut no puede estar vacío.";

  return "";
};

export const telefonoValidator = telefono => {
  if (!telefono || telefono.length <= 0) return "El telefono no puede estar vacío.";

  return "";
};

export const direccionValidator = direccion => {
  if (!direccion || direccion.length <= 0) return "La direccion no puede estar vacía.";

  return "";
};

