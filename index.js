document.querySelector("#moreButton").addEventListener("click", function () {
  document.querySelectorAll(".hidden").forEach(function (item) {
    item.classList.remove("hidden");
  });
});
