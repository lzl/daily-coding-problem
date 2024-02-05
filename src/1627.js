// https://www.joshwcomeau.com/snippets/javascript/debounce/

const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

function log(val) {
  console.log("log:", val);
}

const debouncedFn = debounce(log, 1000);

const max = 10;
let current = 0;
const id = setInterval(() => {
  if (current >= max && id) {
    clearInterval(id);
  }
  debouncedFn(current);
  current++;
}, 800);
