let form = document.querySelector("form");
let input = document.querySelector("#input");
let output = document.querySelector("#output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let list = input.value;
  let block = document.createElement("li");
  
  block.innerText = list;
  input.value = "";
  block.style.margin = "10px 0 0 20px";
  block.style.fontSize = "20px";
  
  output.append(block);
  block.addEventListener("click", () => {
    if (block.style.textDecoration === "line-through") {
      block.style.textDecoration = "none";
    } else {
      block.style.textDecoration = "line-through";
    }
  })

  block.addEventListener("mouseover", () =>{
    block.style.color = "red";
  })

  block.addEventListener("mouseleave", () =>{
    block.style.color = "black";
  })

})

