const students = [
  { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
  { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
  { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
  { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
  { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
  { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
  { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
  { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let counts = { Gioi: 0, Kha: 0, TrungBinh: 0, Yeu: 0 };
let highest = { name: "", avg: -1 };
let lowest = { name: "", avg: 11 };
let totalMath = 0,
  totalPhysics = 0,
  totalCs = 0;

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

for (let i = 0; i < students.length; i++) {
  const s = students[i];

  // 1. Tính TB
  const avg = (s.math * 0.4 + s.physics * 0.3 + s.cs * 0.3).toFixed(1);

  // 2. Xếp loại & 4. Đếm số lượng
  let rank = "";
  if (avg >= 8.0) {
    rank = "Giỏi";
    counts.Gioi++;
  } else if (avg >= 6.5) {
    rank = "Khá";
    counts.Kha++;
  } else if (avg >= 5.0) {
    rank = "Trung bình";
    counts.TrungBinh++;
  } else {
    rank = "Yếu";
    counts.Yeu++;
  }

  // 3. In bảng
  console.log(
    `| ${String(i + 1).padEnd(3)} | ${s.name.padEnd(6)} | ${String(avg).padEnd(4)} | ${rank.padEnd(11)} |`,
  );

  // 5. Tìm cao nhất, thấp nhất
  if (parseFloat(avg) > highest.avg) {
    highest.avg = parseFloat(avg);
    highest.name = s.name;
  }
  if (parseFloat(avg) < lowest.avg) {
    lowest.avg = parseFloat(avg);
    lowest.name = s.name;
  }

  // Tính tổng từng môn
  totalMath += s.math;
  totalPhysics += s.physics;
  totalCs += s.cs;
}

console.log("\n--- Thống kê ---");
console.log(
  `Số lượng: Giỏi (${counts.Gioi}), Khá (${counts.Kha}), Trung bình (${counts.TrungBinh}), Yếu (${counts.Yeu})`,
);
console.log(`Cao nhất: ${highest.name} (${highest.avg})`);
console.log(`Thấp nhất: ${lowest.name} (${lowest.avg})`);

// 6. Tính TB môn toàn lớp
const totalStudents = students.length;
console.log(`\n--- TB môn toàn lớp ---`);
console.log(
  `Toán: ${(totalMath / totalStudents).toFixed(1)} | Lý: ${(totalPhysics / totalStudents).toFixed(1)} | CS: ${(totalCs / totalStudents).toFixed(1)}`,
);
