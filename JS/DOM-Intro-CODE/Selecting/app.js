const allImages = document.getElementsByTagName("img");

for (let img of allImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const squareImages = document.getElementsByClassName("square");

for (let img of squareImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const links = document.querySelectorAll("p a");

for (let link of links) {
  console.log(link.href);
}
const banner = document.getElementById("banner");
banner.style.height = "500px";
banner.style.width = "500px";

const ad = document.querySelector("img:nth-of-type(3)");
document.querySelector('a[title="Java"');
ad.style.height = "10px";
