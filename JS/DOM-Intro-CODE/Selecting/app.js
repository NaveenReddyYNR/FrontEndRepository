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

// properties and methods

const h1 = document.querySelector("h1");
const h12 = document.querySelector("h1:nth-of-type(2)");
const h13 = document.querySelector("h1:nth-of-type(3)");

h1.getAttribute("class");
// h1.setAttribute('class','class1');
// h1.setAttribute('class','class2');

h1.classList.add("class1"); // we have add, remove, contains, toggle
h1.classList.add("class2"); // we have add, remove, contains, toggle(class to toggle{on\off})
h12.classList.add("class1", "class2");
h13.classList.add("class1", "class2");

const h3 = document.createElement("h3");
h3.innerText = "I am H3";
document.body.appendChild(h3); // appent element at last child inside body.
h3.append(" appendText");
h3.prepend("prependText ");

//h1.appendChild(h3); // to add element inside targeted element. <h1> <h3>appendChild</h3> </h1>

const t1 = document.createElement("p");
t1.innerText = "I am p1";

//h12.insertAdjacentElement("beforebegin", t1);
h12.insertAdjacentElement("beforeend", t1); // child of h12
//h12.insertAdjacentElement("afterbegin", t1);
// h12.insertAdjacentElement("afterend", t1);

//h12.after(t1);
// h12.before(t1);

h12.removeChild(t1);
h12.remove();