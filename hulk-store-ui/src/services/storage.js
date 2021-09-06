export const getToken = (name) => localStorage.getItem(name);

export const setToken = (key, value) => localStorage.setItem(key, value);
