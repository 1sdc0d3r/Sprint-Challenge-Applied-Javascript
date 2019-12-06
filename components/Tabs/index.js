// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(res => {
    //* console.log(res);
    tabMaker(res);
  })
  .catch(err => console.log(err));

const tabEntryPoint = document.querySelector(".tabs");

function tabMaker(res) {
  for (let i = 0; i < res.data.topics.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("tab");
    newDiv.textContent = `\xa0\xa0` + `${res.data.topics[i]}`;
    // console.log(newDiv.textContent);
    tabEntryPoint.append(newDiv);
  }
  //   return newDiv;
}
