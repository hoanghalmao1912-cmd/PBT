function playGame() {
  const target = Math.floor(Math.random() * 100) + 1;
  const maxAttempts = 7;
  let attempts = 0;
  let history = [];

  while (attempts < maxAttempts) {
    let input = prompt(
      `Hãy đoán số từ 1-100 (Còn ${maxAttempts - attempts} lượt đoán):\nĐã đoán: ${history.join(", ")}`,
    );

    // Xử lý người dùng bấm Cancel
    if (input === null) {
      alert("Bạn đã thoát game!");
      return;
    }

    let guess = parseInt(input);

    // Validate 1: Kiểm tra số hợp lệ (1-100)
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Vui lòng nhập một số hợp lệ từ 1 đến 100!");
      continue; // Bỏ qua lượt này, không trừ số lần đoán
    }

    // Validate 2: Kiểm tra số đã đoán chưa
    if (history.includes(guess)) {
      alert("Bạn đã đoán số này rồi!");
      continue; // Bỏ qua lượt này
    }

    // Bắt đầu đếm lượt và lưu lịch sử
    history.push(guess);
    attempts++;

    // Kiểm tra kết quả
    if (guess === target) {
      alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
      return; // Kết thúc game
    } else if (guess < target) {
      alert("Cao hơn!");
    } else {
      alert("Thấp hơn!");
    }
  }

  // Nếu thoát vòng lặp (hết 7 lần) mà chưa return -> Thua cuộc
  alert(`Bạn đã hết 7 lượt. Thua cuộc!\nĐáp án đúng là: ${target}`);
}
