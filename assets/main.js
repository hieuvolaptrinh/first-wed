// phần header
let header = document.getElementById("header");
let mobilemenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;
mobilemenu.onclick = function () {
  var isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};
// tự động đóng khi mở menu mà chưa được
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  menuItem.onclick = function (event) {
    var isParentMenu =
      this.menuItem.nextElementSibling &&
      menuItem.nextElementSibling.classList.contains("subnav");
    if (!isParentMenu) {
      header.style.height = null;
    } else {
      event.preventDefault();
    }
  };
}

// phần mua vé

// lấy ra tất cả các class
const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
// const modalClose = document.querySelector(".js-modal-close");

// thêm class open vào modal để nó hiển thị lên nè
function show() {
  modal.classList.add("open");
}

// gỡ class open để nó đóng lại
function close() {
  modal.classList.remove("open");
}

//
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", show);
}
// // dấu tắt
// modal.addEventListener("click", close);

// ấn ngoài là sẽ tắt mà phải trừ ra nữa chứ ấn bên trong nó cũng xóa mất (xóa nổi bọt đi)
modal.addEventListener("click", close);

// hàm xóa nổi bọt đi để nó ăn đoạn bên ngoài thôi
// ngừng từ thằng modal container trờ vào
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
