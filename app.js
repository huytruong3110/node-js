// Thêm module express vào project
const express = require("express");
// Khởi tạo một app sử dụng module express
const app = express();
const path = require("path");
// Định nghĩa tên cổng để chạy ứng dụng Node JS (tùy chọn)
const port = 8080;

// Đăng ký để sử dụng POST method
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// Đăng ký pug
app.set("views", "./views");
app.set("view engine", "pug");

const userRouter = require("./router/user");
app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
res.end();
}); 

 
// Hàm listen dùng để khởi động server. Có 2 tham số
// 1. port sử dụng
// 2. Hàm sử dụng khi server khởi động
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}/users`);
});

// Query parameters là một chuỗi truy vấn được client gửi lên server
// VD: http://localhost:8080/users?name=John&email=5a9jv@example.com
// Sau dấu ? là query parameters: name=John&email=5a9jv@example.com
// Mỗi truy vấn sẽ đi theo dạng một cặp: {key: value}
// Ưsng với url: name=John&email=5a9jv@example.com
// Chuyển được về object dạng:
// {
//   name: "John",
//   email: "5a9jv@example.com"
// }
//}