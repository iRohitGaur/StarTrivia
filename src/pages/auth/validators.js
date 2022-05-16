export const isValidEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
    ? true
    : false;
};

export const isValidPassword = (password) => {
  return password.length > 5;
};

export const isValidName = (name) => {
  return name.length > 2;
};

export const isValidUsername = (username) => {
  return username.length > 2 && username.length < 16;
};
