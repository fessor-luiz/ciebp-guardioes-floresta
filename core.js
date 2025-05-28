import cartasJogo from './cartas.js'

// const btn = document.getElementById('add-card')
const deck = document.getElementById('deck')
let quantidadeCartas = deck.children.length

const raridade = { comum: .78, raro: .20, lendaria: .02 }

// window.onbeforeunload = function () {
//     return true;
// };

window.onload = function () {
    if (quantidadeCartas === 0) {
        for (let i = 0; i != 5; i++) {
            deck.append(criarCard(i))
        }
    }
}

function criarCard(id) {

    const sorteio = Math.random()

    let cartas = cartasJogo.comuns;
    switch (sorteio > 0) {
        case sorteio <= raridade.lendaria:
            cartas = cartasJogo.lendarias
            break
        case sorteio > raridade.lendaria && sorteio <= raridade.comum:
            cartas = cartasJogo.comuns
            break;
        case sorteio > raridade.comum:
            cartas = cartasJogo.raras
            break;
        default:
            break;
    }
    const randomN = Math.ceil(Math.random() * cartas.length - 1)
    const divCard = document.createElement("div");
    divCard.id = "card-" + id;
    divCard.onclick = (c) => {
        const element = document.getElementById(c.currentTarget.id)

        if (element.parentElement.id === 'board') {
            document.getElementById('deck').appendChild(element)
        } else {
            const board = document.getElementById('board')
            const boardImgs = board.getElementsByTagName('img')
            let compareImg = element.getElementsByTagName('img')[0]

            for (let e = 0; e < boardImgs.length; e++) {
                if (boardImgs[e].src === compareImg.src) {
                    alert("Você não pode jogar duas cartas iguais.")
                    return
                }
            }
            board.appendChild(element)
        }

    }
    divCard.className = `${cartas[randomN].rarity} card-background ms-3 position-relative`;
    divCard.style.cursor = 'pointer'
    divCard.style.minHeight = "470px"

    const badge = document.createElement("span");
    badge.textContent = cartas[randomN].actionPoints;
    badge.style.width = "80px";
    badge.style.height = "80px";
    badge.className =
        " d-flex justify-content-center align-items-center fs-1 text-danger badge position-absolute top-0 start-50 translate-middle bg-warning rounded-circle";

    const img = document.createElement("img");
    img.src = cartas[randomN].imgPath
    img.id = "img-card-deck"
    img.alt = "";
    img.height = 300;
    img.width = 300;
    img.className = "object-fit-cover card-img-custom";

    const h4 = document.createElement("h4");
    h4.className = `${cartas[randomN].fontColor} text-uppercase text-center h-4 border-bottom mb-0`;
    h4.textContent = cartas[randomN].title;

    const p1 = document.createElement("p");
    p1.className = `text-white m-0 blockquote fs-6 fst-italic pt-2`;
    p1.textContent = cartas[randomN].description;

    const p2 = document.createElement("p");
    p2.className = `d-flex align-items-end fs-6 ${cartas[randomN].fontColor == 'text-white' ? 'text-success' : cartas[randomN].fontColor} m-0 justify-content-center`;
    p2.textContent = cartas[randomN].bonus;
    p2.style.height = "9vh"


    divCard.appendChild(badge);
    divCard.appendChild(img);
    divCard.appendChild(h4);
    divCard.appendChild(p1);
    divCard.appendChild(p2);

    return divCard;

}

