# 1. Javascript cơ bản
- JavaScript (JS) là ngôn ngữ lập trình nhẹ, được giải thích hoặc biên dịch tức thời với các chức năng hạng nhất. Mặc dù nó được biết đến nhiều nhất là ngôn ngữ kịch bản cho các trang Web, nhiều môi trường không có trình duyệt cũng sử dụng nó, chẳng hạn như Node.js, Apache CouchDB và Adobe Acrobat. JavaScript là một ngôn ngữ động, đa mô hình, đơn luồng, dựa trên nguyên mẫu, hỗ trợ các kiểu hướng đối tượng, mệnh lệnh và khai báo (ví dụ: lập trình chức năng).

# 2. HTML Form
- HTML form là một phần quan trọng của web development, cho phép người dùng gửi thông tin và tương tác với các trang web. Form được tạo ra bằng cách sử dụng các phần tử HTML như `<form>`, `<input>`, `<select>`, `<textarea>`, `<button>`, và nhiều phần tử khác.

## Một form trong HTML thường bao gồm các thành phần sau:
1. Thẻ `<form>`: Đây là phần tử cha chứa toàn bộ nội dung của form.
2. Phần tử `<input>`: Loại phổ biến nhất, cho phép người dùng nhập dữ liệu. Có nhiều kiểu input như text, password, email, number, checkbox, radio, v.v.
3. Phần tử `<select>`: Cho phép người dùng chọn một giá trị từ danh sách các tùy chọn.
4. Phần tử `<textarea>`: Cho phép nhập một đoạn văn bản dài, thường được sử dụng để viết các phản hồi dài.
5. Phần tử `<button>`: Tạo nút để gửi form hoặc thực hiện một hành động nào đó.
6. Thuộc tính `action`: Xác định URL nơi dữ liệu form sẽ được gửi tới.
7. Thuộc tính `method`: Xác định phương thức HTTP sử dụng để gửi dữ liệu, thường là GET hoặc POST.
8. Phần tử `<option>`: cho phép người dùng tạo một danh sách tùy chọn trong thẻ `<select>`
9. Phần tử `File upload`: cho phép người dùng tải lên các tệp rừ máy tính của họ.


## Một số validate Form thường gặp gồm:
1. `validateEmail`: kiểm trả định dạng email.

```
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```
2. `validateLenght`: kiểm tra độ dài của một chuỗi.

```
function validateLength(input, length) {
  return input.length >= length;
}

```
3. `validatePhoneNumber`: kiểm tra số điện thoại hợp lệ.
```

function validatePhoneNumber(phoneNumber) {
  const regex = /^\d{10}$/;
  return regex.test(phoneNumber);
}
```
4. `validateRequiredField`: kiểm tra xem một trường input có được chọn không
```
function validateRequiredField(input) {
  return input !== "";
}
```