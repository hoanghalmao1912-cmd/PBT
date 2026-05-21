// 1. pipe() — Nối chuỗi functions
function pipe(...fns) {
  return (initialValue) => fns.reduce((acc, fn) => fn(acc), initialValue);
}

const process = pipe(
  (x) => x * 2, // 5 → 10
  (x) => x + 10, // 10 → 20
  (x) => x.toString(), // 20 → "20"
  (x) => "Kết quả: " + x,
);
console.log("pipe test:", process(5)); // → "Kết quả: 20"

// 2. memoize() — Cache kết quả
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];

    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const expensiveCalc = memoize((n) => {
  console.log("Đang tính...");
  let result = 0;
  for (let i = 0; i < n; i++) result += i;
  return result;
});
console.log("memoize test 1:", expensiveCalc(1000000)); // → In "Đang tính..."
console.log("memoize test 2:", expensiveCalc(1000000)); // → Không in, lấy từ cache

// 3. debounce() — Chờ user ngừng gõ mới thực hiện
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const search = debounce((query) => {
  console.log("Searching:", query);
}, 500);
search("a");
search("ap");
search("app"); // Chỉ thực thi lần này sau 500ms

// 4. retry() — Thử lại nếu lỗi
async function retry(fn, maxAttempts = 3) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxAttempts - 1) throw error;
      console.log(`Lỗi, thử lại lần ${i + 1}...`);
    }
  }
}

// Giả lập hàm có thể lỗi để test retry
let attempts = 0;
const unstableFetch = async () => {
  attempts++;
  if (attempts < 3) throw new Error("Network Error");
  return "Thành công!";
};

retry(unstableFetch).then((res) => console.log("retry test:", res));
