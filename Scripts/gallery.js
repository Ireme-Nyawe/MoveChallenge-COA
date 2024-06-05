document.addEventListener("DOMContentLoaded", function () {
  const imageInteractions = document.querySelectorAll(".image-interaction");

  imageInteractions.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.querySelector(".image").style.filter = "blur(20px)";
      item.querySelector(".image-info").style.transform = "translateY(-20px)";
      item.querySelector("button").style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
      item.querySelector(".image").style.filter = "none";
      item.querySelector(".image-info").style.transform = "translateY(0)";
      item.querySelector("button").style.display = "none";
    });
  });
});
