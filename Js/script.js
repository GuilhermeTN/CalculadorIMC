function main() {
    const form = document.querySelector(".form");

    form.onsubmit = function (evento) {
        evento.preventDefault();

        const peso = parseFloat(document.querySelector(".peso").value);
        const altura = parseFloat(document.querySelector(".altura").value);
        const imc = (peso / (altura * altura)).toFixed(2);

        document.querySelector(".num").innerHTML = imc;

        document.querySelectorAll(".IMC p, .resultado p").forEach(elem => {
            elem.style.backgroundColor = '';
        });

        const categorias = [
            { limite: 18.5, classes: [".a17", ".b17"], cor: "green" },
            { limite: 24.9, classes: [".a18", ".b18"], cor: "green" },
            { limite: 29.9, classes: [".a25", ".b25"], cor: "green" },
            { limite: 34.9, classes: [".a30", ".b30"], cor: "green" },
            { limite: 39.9, classes: [".a35", ".b35"], cor: "green" },
            { limite: Infinity, classes: [".a40", ".b40"], cor: "green" }
        ];

        for (let i = 0; i < categorias.length; i++) {
            if (imc <= categorias[i].limite) {
                categorias[i].classes.forEach(cls => {
                    document.querySelector(cls).style.backgroundColor = categorias[i].cor;
                });
                break;
            }
        }
    };
}

document.addEventListener("DOMContentLoaded", main);
