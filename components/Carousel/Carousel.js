/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const entryPoint = document.querySelector(".carousel-container");

function carouselCreator() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("carousel");

  const leftBtn = document.createElement("div");
  leftBtn.classList.add("left-button");
  leftBtn.style.backgroundColor = "hotPink";

  const img1 = document.createElement("img");
  img1.src = "./assets/carousel/mountains.jpeg";

  const img2 = document.createElement("img");
  img2.src = "./assets/carousel/computer.jpeg";

  const img3 = document.createElement("img");
  img3.src = "./assets/carousel/trees.jpeg";

  const img4 = document.createElement("img");
  img4.src = "./assets/carousel/turntable.jpeg";

  const rightBtn = document.createElement("div");
  rightBtn.classList.add("right-button");
  rightBtn.style.backgroundColor = "hotPink";

  mainDiv.append(leftBtn, img1, img2, img3, img4, rightBtn);
  entryPoint.append(mainDiv);

  return mainDiv;
}
carouselCreator();
