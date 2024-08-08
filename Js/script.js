function main() {
    const form = document.querySelector(".form");

  form.onsubmit = function (evento) {
      evento.preventDefault();
    const peso = document.querySelector(".peso").value;
    const altura = document.querySelector(".altura").value;
    
    const imc = peso/(altura*altura);
    const formatImc = imc.toFixed(2);

    const p = document.querySelector(".num");
    p.innerHTML = formatImc;

    function resetarCor() {
        const classes = ['a17', 'a18', 'a25', 'a30', 'a35', 'a40'];
        const resultadoClasses = ['b17', 'b18', 'b25', 'b30', 'b35', 'b40'];
        
        classes.forEach(cls => {
            const elem = document.querySelector(`.${cls}`);
            if (elem) elem.style.backgroundColor = ''; 
        });
    
        resultadoClasses.forEach(cls => {
            const elem = document.querySelector(`.${cls}`);
            if (elem) elem.style.backgroundColor = ''; 
        });
    }

    resetarCor();


    function aplicarCor(numClass, pesoClass, cor) {
        const numColor = document.querySelector(numClass);
        const pesoColor = document.querySelector(pesoClass);
        if (numColor) numColor.style.backgroundColor = cor;
        if (pesoColor) pesoColor.style.backgroundColor = cor;
    }
    

    if (formatImc < 18.5) {
        console.log("Abaixo do peso");
        aplicarCor(".a17", ".b17", "green");
    } else if (formatImc >= 18.5 && formatImc <= 24.9) {
        console.log("Peso Normal");
        aplicarCor(".a18", ".b18", "green");
    } else if (formatImc >= 25 && formatImc <= 29.9) {
        console.log("Sobrepeso");
        aplicarCor(".a25", ".b25", "green");
    } else if (formatImc >= 30 && formatImc <= 34.9) {
        console.log("Obesidade Grau 1");
        aplicarCor(".a30", ".b30", "green");
    } else if (formatImc >= 35 && formatImc <= 39.9) {
        console.log("Obesidade Grau 2");
        aplicarCor(".a35", ".b35", "green");
    } else {
        console.log("Obesidade Grau 3");
        aplicarCor(".a40", ".b40", "green");
    }
    
    

  };

}

document.addEventListener("DOMContentLoaded", main);
