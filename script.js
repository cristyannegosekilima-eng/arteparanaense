const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function (botaoCurtir) {
    let curtiu = false;
    botaoCurtir.addEventListener("click", curtir);

    function curtir() {
        const contador = botaoCurtir.querySelector("span");
        if (curtiu === false) {
            contador.textContent++;
            curtiu = true;
        } else {
            contador.textContent--; // Corrigido: era == e agora é --
            curtiu = false;
        }
    }
});

// Correções do modo escuro abaixo:
const btnTema = document.querySelector(".btn-tema"); // "t" minúsculo
btnTema.addEventListener("click", mudarTema); // sem espaço

function mudarTema() {
    document.body.classList.toggle("tema-escuro"); // "L" maiúsculo em classList e "t" minúsculo em tema-escuro
    
    // Bônus: muda o ícone entre lua e sol
    if (document.body.classList.contains("tema-escuro")) {
        btnTema.textContent = "☀️";
    } else {
        btnTema.textContent = "🌙";
    }
}