function debounce(fn, ms) {
  let timeoutId;
  let revoked = false;

  return (...args) => {
    if (!revoked) {
      fn(...args);
      revoked = true;
    }

    if (timeoutId && revoked) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, ms);
  };
}

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
