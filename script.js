const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// スクロール位置に応じてヘッダーの見た目を少し変える
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});

// プロセス項目をクリックするとアクティブ表示を切り替える
document.querySelectorAll(".process-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".process-item").forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");
  });
});
