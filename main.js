const contentItems = document.querySelectorAll(".content-item");
if (contentItems) {
  contentItems.forEach((item) => {
    const heading = item.querySelector(".content-item-heading");
    const icon = heading.querySelector(".content-item-heading-icon");

    heading.addEventListener("click", () => {
      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        icon.innerHTML = '<i class="fa-solid fa-minus"></i>';
      } else {
        icon.innerHTML = '<i class="fa-solid fa-plus"></i>';
      }
    });
  });
}
