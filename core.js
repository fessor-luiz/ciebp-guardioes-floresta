import listaCartas from './cartas.js'

const btn = document.getElementById('add-card')
const deck = document.getElementById('deck')

btn.addEventListener('click', () => {
    deck.append(criarCard())
})

// window.onbeforeunload = function () {
//     return true;
// };

function criarCard() {
    deck.innerHTML = ''

    const randomN = Math.ceil(Math.random() * listaCartas.length - 1)

    const divCard = document.createElement("div");
    divCard.id = "card";
    divCard.className = "bg-dark card-background ms-3 position-relative";

    const badge = document.createElement("span");
    badge.textContent = listaCartas[randomN].actionPoints;
    badge.style.width = "80px";
    badge.style.height = "80px";
    badge.className =
        "d-flex justify-content-center align-items-center fs-1 text-danger badge position-absolute top-0 start-50 translate-middle bg-warning rounded-circle";

    const img = document.createElement("img");
    img.src = listaCartas[randomN].imgPath
    img.alt = "";
    img.height = 270;
    img.width = 270;
    img.className = "object-fit-cover card-img-custom";

    const h4 = document.createElement("h4");
    h4.className = "text-white text-uppercase fw-bolder border-bottom mb-0 p-1";
    h4.textContent = listaCartas[randomN].title;

    const p1 = document.createElement("p");
    p1.className = "text-white m-0 p-1";
    p1.textContent = listaCartas[randomN].description;

    const p2 = document.createElement("p");
    p2.className = "d-flex text-success pt-3 fst-italic justify-content-center";
    p2.textContent = listaCartas[randomN].bonus;

    divCard.appendChild(badge);
    divCard.appendChild(img);
    divCard.appendChild(h4);
    divCard.appendChild(p1);
    divCard.appendChild(p2);

    return divCard;
}
