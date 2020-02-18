export default function(key, initialValue) {
  const get = () => {
    const currentStorage = localStorage.getItem(key);

    if (!currentStorage) {
      return initialValue;
    }

    return JSON.parse(localStorage.getItem(key));
  };

  const set = value => {
    const currentStorage = get();
    const valueToStore =
      value instanceof Function ? value(currentStorage) : value;

    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return {
    get,
    set
  };
}
