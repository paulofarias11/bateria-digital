/*
    foi criado uma função executar que recebe como parâmetro um seletor de áudio das tags áudio no html;
    essa função retorna para uma referência constante o retorno da minha busca de seletor e em seguida executa uma condição
    para que após satisfetas aí sim execute o áudio das tags;
*/

function executar (seletorAudio) {
    const elemento = document.querySelector (seletorAudio);
    console.log(elemento);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido.')
    }
}

// uma referência constante recebe todos os seletores do html com a classe tecla e armazena esses valores;
const listaDeTeclas = document.querySelectorAll ('.tecla');

/*
    por meio do for é feito toda a lógica de repetição que permite acessar todas as teclas e sons do arquivo html;
    a const tecla armazena a array listaDeTeclas[i] que nos da acesso a todas as classes teclas do html;
    a const instrumento recebe como valor a segunda classe das teclas do html por meio da classList[1], ou seja, .tecla_pom;
    em seguida a const idAudio, por meio do template string, faz a concatenação do início do id das tags áudio com a classList
    da const istrumento, o que resulta no id completo dessas tags e assim permitindo a reprodução dos sons por meio da função de
    onclick logo abaixo;
*/

for (let i = 0; i < listaDeTeclas.length; i += 1) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    /*
        template string - serve para fazer uma abertura no JS para que dentro da string seja possível acessar a const instrumento
        e assim fazer o parâmetro da função player dinamicamente;
    */
   
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        executar(idAudio);
    };

    tecla.onkeydown = function (event) {
        if (event.code === 'Enter' || event.code === 'Space' || event.code === "NumpadEnter") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
