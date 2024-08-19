/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extencion = [".com", ".net", ".us", ".io"];
  let domainlist = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let y = 0; y < adj.length; y++) {
      for (let j = 0; j < noun.length; j++) {
        for (let F = 0; F < extencion.length; F++) {
          let domain = pronoun[i] + adj[y] + noun[j] + extencion[F];
          domainlist.push(domain);
        }
      }
    }
  }
  const domain = document.getElementById("domain");
  //domain.textContent = domainlist;

  console.log(domainlist);
  domainlist.forEach(domainName => {
    const li = document.createElement("li");
    li.textContent = domainName;
    domain.appendChild(li);
  });
  return domainlist;
};
