const navbar = document.querySelector(".top-nav-inner");
const announcement = document.querySelector(".announcment a");
const navRight = document.querySelector(".top-nav-right");
const sec7Img = document.querySelector(".sec-7-left img");
const rightBox = document.querySelectorAll(".sec-7-right .box");

const announcements = [
  "Our best-selling Flex luggage is ready for takeoff. Shop now",
  "Build your set: Save up to $100 when you bundle",
  "Your closet on wheels is back. Shop the restock.",
];

const boxImages = [
  "https://www.awaytravel.com/cdn/shop/files/08UPGR25-MACRO-05_Warranty_Ecomm_Reasons_to_Get_Away_PSN.jpg?v=1776162492&width=1200", // box 1
  "https://www.awaytravel.com/cdn/shop/files/RTGA_Wheels.jpg?v=1772047635&width=1200", // box 2
  "https://www.awaytravel.com/cdn/shop/files/Craft-16x9_Warranty_Ecomm_Reasons_to_Get_Away_Engineered_by_experts.jpg?v=1776162352&width=1200", // box 3
  "https://www.awaytravel.com/cdn/shop/files/GivingTuesday_2P2A4162_Social_1x1_f4319ac4-9d1b-4640-b0c1-cd69d1939b1f.jpg?v=1741989893&width=1024", // box 4
];

const colors = ["#59627d", "#F8E3EB", "#D9EAD3"];
const textColors = ["#fff", "#000", "#000"];

let currentIndex = 0;

function changeNavbar() {
  navbar.style.backgroundColor = colors[currentIndex];
  announcement.textContent = announcements[currentIndex];
  announcement.style.color = textColors[currentIndex];

  navRight.style.color = textColors[currentIndex];

  currentIndex = (currentIndex + 1) % colors.length;
}

changeNavbar();
setInterval(changeNavbar, 3000);

rightBox.forEach((box, index) => {
  box.addEventListener("mouseenter", () => {
    sec7Img.src = boxImages[index];

    rightBox.forEach((item) => {
      item.classList.remove("active");
    });

    box.classList.add("active");
  });
});

document.querySelectorAll(".product-slider").forEach((slider) => {
  const cards = slider.querySelector(".card-containers");
  const previousButton = slider.querySelector(".slider-arrow.previous");
  const nextButton = slider.querySelector(".slider-arrow.next");

  previousButton.addEventListener("click", () => {
    cards.scrollBy({ left: -cards.clientWidth, behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    cards.scrollBy({ left: cards.clientWidth, behavior: "smooth" });
  });
});
