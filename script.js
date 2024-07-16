const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
// const thumbs = document.querySelectorAll(".thumb");
let eOld = null;
container.addEventListener("click", function (e) {
  // cek apakah yang di-klik adalah thumb
  //   if (e.target.className == "thumb") jumbo.src = e.target.src;
  //   jumbo.classList.add("fade");
  //   setTimeout(() => {
  //     jumbo.classList.remove("fade");
  //   }, 500);
  //   thumbs.forEach((thumb) => {
  //     thumb.className = "thumb";
  //   });
  //   e.target.classList.add("active");

  if (e.target.className == "thumb") {
    if (eOld != null) {
      eOld.classList.remove("active");
    }
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);
    e.target.classList.add("active");
    eOld = e.target;
  }
});
