import './style.css';

document.querySelector("#app").innerHTML=`
  <h1>カウンター</h1>
  <p id="count">0</p>
  <button id="minusbtn">-</button>
  <button id="plusbtn">+</button>
  `;
const countEl=document.querySelector("#count");
const minus=document.querySelector("#minusbtn");
const plus=document.querySelector("#plusbtn");
let count=0;
minus.addEventListener("click",()=>{
  count -=1;
  countEl.textContent=count;
});
plus.addEventListener("click",()=>{
  count +=1;
  countEl.textContent=count;
});