const debounce = <T extends unknown[]>(
  func: (...args: T) => void,
  delay: number
) => {
  let timeoutId: number | null = null;
  return (...args: T) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      func(...args);
    }, delay);
  };
};

export { debounce };
