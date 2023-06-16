const profileImage = document.querySelector("#profile-img");
const titulo = document.querySelector("#title");
const nome = document.querySelector("#name");
const informacao = document.querySelector("#info");
const fotoSeguidor = document.querySelector("#follow-img");
const seguidor = document.querySelector("#follow-name");
const seguidores = document.querySelector("#seguidores");


window.addEventListener("DOMContentLoaded", () => {
  fetchData();
  fetchDato();
});

async function fetchData() {
  await fetch("https://api.github.com/users/isabele22")
    .then((response) => response.json())
    .then((data) => {
      profileImage.setAttribute("src", data.avatar_url);
      titulo.innerHTML = data.company;
      nome.innerHTML = data.login;
      informacao.innerHTML = data.bio;
    });
}
async function fetchDato() {
  await fetch("https://api.github.com/users/isabele22/followers")
    .then((response) => response.json())
    .then((seguir) => {
      seguir.map((item) => {
        seguidores.innerHTML += `
            
            <div id ="caixa-seguidor">
            <img id="follow-img" src="${item.avatar_url}" alt="">
            <p id="follow-name">${item.login}</p>
            </div>
            
            `;
      });
    });
}