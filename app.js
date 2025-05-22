const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
const respostaInput = document.getElementById('resposta')

document.addEventListener("DOMContentLoaded", () => {
    respostaInput.value = ""

})

respostaInput.addEventListener('keyup', () => {
    const html = document.getElementsByTagName('html')

    switch (respostaInput.value) {
        case 'decomposição':
            if (document.title === 'Guardiões da Floresta') {
                window.location.href = "/pages/nivel-2.html"
            }
            break;
        case 'lvl3':
            if (document.title === 'Nível 2')
                window.location.href = "nivel-3.html"
            break
        case 'lvl2':
            if (document.title != 'Nível 2')
                window.location.href = "nivel-2.html"
            break

        default:
            break;
    }

})

