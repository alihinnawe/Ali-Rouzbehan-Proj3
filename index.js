console.clear();

import { createCharacterCard } from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
let page = 1;
let maxPage;
let searchQuery = "";

/*seach bar triggered*/
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  fetchCharacters((page = 1), searchQuery);
  searchBar.reset();
});

/*1. create a connection with the API ; 2. loop each page; 3. append each charachter*/
async function fetchCharacters(page, searchQuery) {
  const result = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}` //
  );
  const data = await result.json();

  const characters = data.results;
  maxPage = data.info.pages;
  cardContainer.innerHTML = "";
  pagination.textContent = `${page} / ${maxPage} `;

  for (const charact of characters) {
    const newCharact = createCharacterCard(charact);
    cardContainer.append(newCharact);
  }
}

/*run the first page characters*/
fetchCharacters(page, searchQuery);

/*showing the characters of the next page*/
nextButton.addEventListener("click", () => {
  prevButton.textContent = "previous";

  if (page === maxPage) {
    nextButton.textContent = "No More Pages";
    return;
  }
  page++;
  pagination.textContent = `${page} /${maxPage}`;
  fetchCharacters(page, searchQuery);
});

/*load the previous page*/
prevButton.addEventListener("click", () => {
  nextButton.textContent = "next";
  if (page <= 1) {
    prevButton.textContent = "Go Forwrard";
    return;
  }
  page--;
  pagination.textContent = `${page} /${maxPage}`;
  fetchCharacters(page, searchQuery);
});
