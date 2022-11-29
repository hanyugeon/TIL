const sessionStorage = window.sessionStorage;

export const getItem = (key, defaultValue) => {
  try {
    const storedValue = sessionStorage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }

    return defaultValue;
  } catch {
    return defaultValue;
  }
};

export const setItem = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
