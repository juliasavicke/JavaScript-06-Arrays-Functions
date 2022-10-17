"use strict";
console.log("eglute.js");

function printTree(aukstis) {
  //let aukstis = 5;
  let eilute = "";
  for (let i = 1; i <= aukstis; i++) {
    eilute = " ".repeat(aukstis - i) + "+".repeat(i + i - 1);
    console.log(eilute);
  }
}
//printTree(10);

function printTree2(height) {
  let laikinaEilute = "";
  let eil = "";
  let eilEl = document.getElementById("eglute");
  for (let i = 1; i <= height; i++) {
    //console.log("i === ", i);
    for (let j = height - i; j >= 0; j--) {
      //console.log("j === ", j);
      laikinaEilute += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      laikinaEilute += "*";
    }

    console.log("laikinaEilute ===", laikinaEilute);
    eil += `<li id = ${i}>${laikinaEilute}</li>`;

    laikinaEilute = "";
  }
  eilEl.innerHTML = eil;
}
printTree2(25);
