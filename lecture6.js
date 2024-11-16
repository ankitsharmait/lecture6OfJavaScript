/*console.log("hello javascript");
const html=document.children[0];
const body=html.children[1];
const h =body.children[0];
//console.log(body.innerHTML);
//console.log(h.innerHTML);
console.log(html);*/
/*const body = document.querySelector("body");
console.log(body.innerHTML);
const ptag = document.querySelector("p");
console.log(ptag.textContent);*/

/*const ptag = document.querySelector("p");
console.log(ptag.textContent);*/

//how to add <li> inside <ul>
  const liel=document.createElement("li");
  liel.innerText=" i am first list item";
  const ul = document.querySelector("ul");
  ul.appendChild(liel);