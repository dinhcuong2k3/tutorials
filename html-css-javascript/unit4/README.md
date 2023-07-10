# Javascrit this keyword

* In js, the `this` keyword refers to an `object`
* In an object method, `this` refers to the `object`
* Alone, `this` refers to the `global object`
* In a function, `this` refers to the `global object`
* In an event, `this` refers in the `element` that received the event.
* Methods like `call()`, `apply()`, and `bind()` can refer `this` to `any object`
* `this` is not variable. It is a keyword. You cannot change the value of `this`.
* In a function, in strict mode, `this` is `udefined`

Ex: 
```
var person = {
  name: "John",
  age: 28,
  sayHello: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.sayHello(); 
```

# Async(Asynchronous: Bất đồng bộ)
-- Trong javascript, `async` được sử dụng để định nghĩa một hàm bất đồng bộ. Hàm bất đồng bộ là hàm có thể được thực thi mà không chặn các luồng chạy của trương trình. Thay vào đó nó cho phép tác vụ thực thi trong khi chờ bất đồng bộ được hoàn thành.

-- Một khi được đánh dấu là `async`, nó sẽ trả về một `Promise`. `Promise` là một cơ chế xử lý bất động bộ để sử lý kết quả hoắc lỗi được trả về từ bất đồng bộ đó.

-- Bên trong hàm `async`, bạn có thể sử dụng từ khóa "`await`" để đợi kết quả từ một `Promise` được hoàn thành trước khi tiếp tục thực thi hàm. Khi gặp từ khóa `await` trương trình sẽ tạm dừng và không thực hiện bất kỳ tác vụ nào khác cho đến khi `Promise` hoàn thành và trả về kết quả.

    EX:
    ``
    async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    }

    fetchData();
    ``

# HTML DOM
-- `DOM` được viết tắt từ `Document Object Model` (Mô hình đối tượng tài liệu)

-- Khi một web page được tải lên, trình duyệt sẽ tạo 1 DOM
### Với mô hình đối tượng, JavaScript có được tất cả sức mạnh cần thiết để tạo HTML động:

* JavaScript có thể thay đổi tất cả các phần tử HTML trong trang
* JavaScript có thể thay đổi tất cả các thuộc tính HTML trong trang
* Javascript có thể thay đổi tất cả các kiểu CSS trọng trang
* JavaScript có thể xóa các phần tử và thuộc tính HTML hiện có
* JavaScript có thể thêm các phần tử và thuộc tính HTML mới
* JavaScript có thể phản ứng với tất cả các sự kiện HTML hiện có trong trang
* JavaScript có thể tạo các sự kiện HTML mới trong trang

## DOM là gì?
-- The `DOM` is a W3C (`World Wide Web Consortium`) standard

-- The DOM defines a standard for accessing documents:

-- "`The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.`"

## Dưới đây là một số ví dụ về cách bạn có thể sử dụng đối tượng tài liệu để truy cập và thao tác HTML.

### Tìm phần tử
```
document.getElementById(id) ------> Tìm phần tử theo id phần tử
document.getElementsByTagName(name)	------> Tìm phần tử theo tên thẻ
document.getElementsByClassName(name) ------> Tìm phần tử theo tên lớp
```

### Thay đổi phần tử HTML

```
element.innerHTML =  new html content ------> Thay đổi HTML bên trong của một phần tử
element.attribute = new value ------> Thay đổi giá trị thuộc tính của phần tử HTML
element.style.property = new style ------> Thay đổi kiểu của phần tử HTML

Method:
element.setAttribute(attribute, value) ------> Thay đổi giá trị thuộc tính của phần tử HTML
```

### Thêm và xóa các phần tử
```
document.createElement(element) ------> Tạo một phần tử HTML
document.removeChild(element) ------> Xóa một phần tử HTML
document.appendChild(element) ------> Thêm một phần tử HTML
document.replaceChild(new, old) ------> Thay thế một phần tử HTML
document.write(text) ------> Ghi vào luồng đầu ra HTML
```

### Thêm trình xử lý sự kiện

```
document.getElementById(id).onclick = function(){code} ------> Thêm mã xử lý sự kiện vào sự kiện onclick
```

### HTML DOM element Properties and Methods:
* `accessKey`: Đặt hoặc trả về thuộc tính khóa truy cập của một phần tử.
* `addEventListener()`: Gắn một trình xử lý sự kiện vào một phần tử.
* `appendChild()`: Thêm (gắn thêm) một nút con mới vào một phần tử thuộc tính Trả về NamedNodeMap: thuộc tính của phần tử.
* `blur()`: Xóa tiêu điểm khỏi một phần tử.
* `childElementCount`: Trả về số phần tử con của một phần tử.
* `childNodes`: Trả về một NodeList gồm các nút con của một phần tử.
* `children`: Trả về một HTMLCollection gồm các phần tử con của phần tử.
* `classList`: Trả về (các) tên lớp của một phần tử.
* `className`: Đặt hoặc trả về giá trị của thuộc tính lớp của một phần tử.
* `click()`: Mô phỏng nhấp chuột vào một phần tử. .....

# Browser BOM
-- `The Browser Object Model` (`BOM`) cho phép JavaScript "nói chuyện" với trình duyệt.

-- Không có tiêu chuẩn chính thức nào cho Mô hình đối tượng trình duyệt (BOM).

-- Vì các trình duyệt hiện đại đã triển khai (`almost`) các phương thức và thuộc tính giống nhau cho tính tương tác của JavaScript, nên nó thường được gọi là các phương thức và thuộc tính của BOM.

-- `BOM` trong JavaScript đại diện cho các thành phần của trình duyệt web như `cửa sổ`, `khung iFrame`, `cookie`, `lịch sử duyệt`, và các `sự kiện trình duyệt` được kích hoạt bởi người dùng. Nó cung cấp các phương thức và thuộc tính cho phép lập trình viên tương tác và thực hiện các thao tác trên môi trường trình duyệt.

### Ví dụ về một số thành phần quan trọng trong BOM bao gồm:

1. window: Đại diện cho cửa sổ trình duyệt và cung cấp các phương thức như mở, đóng cửa sổ, thay đổi kích thước và di chuyển cửa sổ, và tạo thông báo.
```
EX: window.document.getElementById("header");
```

2. document: Đại diện cho tài liệu HTML được hiển thị trong cửa sổ trình duyệt. Đối tượng document cung cấp các phương thức và thuộc tính cho phép thay đổi nội dung của trang web, tạo ra và xóa các phần tử HTML, và tương tác với các sự kiện liên quan đến tài liệu.

3. navigator: Cung cấp thông tin về trình duyệt hiện tại và hệ điều hành mà trình duyệt đang chạy trên.
```
EX:
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;
</script>
```

4. history: Đối tượng history cho phép truy cập vào lịch sử duyệt web, cho phép điều hướng giữa các trang đã được truy cập trước đó.

```
EX:
<html>
  <head>
    <script>
      function goBack() {
        window.history.back()
      }
    </script>
  </head>
  <body>

    <input type="button" value="Back" onclick="goBack()">

  </body>
</html>
```