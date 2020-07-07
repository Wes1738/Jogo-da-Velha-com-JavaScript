let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Contador de Jogadas

let player1 = 0;
let player2 = 0;

//Adicionando o Evento de Click aos boxes
for (let i = 0; i < boxes.length; i++) {

    //Quando alguém clica na caixa
    boxes[i].addEventListener("click", function () {
        
        let el = checkEl(player1, player2);

        //Verifica se já tem X ou O
        if (this.childNodes.length == 0) {
            
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            //Compuatr Jogada
            if (player1 == player2) {
                player1++;
            } else {
                player2++;
            }

        }

    });
    
}

// Verifica quem vai Jogar
function checkEl(player1, player2) {

    if (player1 == player2) {
        //x
        el = x;
    } else {
        //o
        el = o;
    }

    return el;

}



