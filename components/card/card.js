export function createCharacterCard(charact) {
  const newCharacter = document.createElement("li");
  newCharacter.classList.add("card");

  newCharacter.innerHTML = `
    <div class="card__image-container">
              <img
                class="card__image"
                src="${charact.image}"
                alt="Rick Sanchez"
              />
              <div class="card__image-gradient"></div>
            </div>
            <div class="card__content">
              <h2 class="card__title">${charact.name}</h2>
              <dl class="card__info">
                <dt class="card__info-title">Status</dt>
                <dd class="card__info-description">${charact.status}</dd>
                <dt class="card__info-title">Type</dt>
                <dd class="card__info-description"></dd>
                <dt class="card__info-title">Occurrences</dt>
                <dd class="card__info-description">${charact.episode.length}</dd>
              </dl>
            </div>`;

  return newCharacter;
}
