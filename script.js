let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let player22 = document.querySelector("#player2");
let player11 = document.querySelector("#player1");
let player1 = 0;
let player2 = 0;
let wor = document.querySelector("#wor");
let closebtn = document.querySelector("#close");
let winner = document.querySelector("#winner");
let newbtn = document.querySelector("#newbtn");
let turn0 = true; let winPatterns = [
    [0, 1, 2], // first row
    [3, 4, 5], // second row
    [6, 7, 8], // third row
    [0, 3, 6], // first column
    [1, 4, 7], // second column
    [2, 5, 8], // third column
    [0, 4, 8], // diagonal
    [2, 4, 6]  // diagonal
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        box.style.color = "red";
        if (turn0) {
            box.style.color = "blue";
            box.innerHTML = "O";
            turn0 = false;

            setTimeout(() => {
                if (window.matchMedia("(max-width: 500px)").matches){
                    wor.style.transform ="translateX(200px)";;
                } 
                else if (window.matchMedia("(max-width: 1100px)").matches){
                     wor.style.transform = " translateX(400px)"; 
                    
                }
                else if(window.matchMedia("(max-width: 1300px)").matches){
 wor.style.transform = " translateX(600px)"; 
                }
                else {
                    wor.style.transform = " translateX(780px)"; }

            }, 1000);
        }
        else {

            box.innerHTML = "X";
            turn0 = true;

            setTimeout(() => {
                if (window.matchMedia("(max-width: 500px)").matches){
                    
                    wor.style.transform =   "translateX(-100px) rotate(3600deg) scaleX(-1) "
                     
                }
                else if (window.matchMedia("(max-width: 1300px)").matches) {
                     wor.style.transform = " translateX(-90px) rotate(3600deg) scaleX(-1)"; 

                }
                 else{
                    
                     wor.style.transform = "translateX(-100px) rotate(3600deg) scaleX(-1) ";
                }

            }, 1000);
        }
        box.style.pointerEvents = 'none';
        if (checkWinner()) {
            console.log("winner");
            rrset();
            return true;

        }
        else if (checkTie()) {
            console.log("tie");
        }




    })
})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 == p2 && p2 == p3 && p1 != "" && p2 != "" && p3 != "") {
            if (p1 === "O") {
                player1 += 1;
                player11.innerHTML = "PLAYER 1: " + player1;
                winner.innerText = " winner is PLAYER 1";

                
            }
            else {
                player2 += 1;
                player22.innerHTML = "PLAYER 2: " + player2;
                winner.innerHTML = " winner is PLAYER 2";
                
            }



            winner.style.display = "block";
            setTimeout(() => {
                winner.style.display = "none";
            }, 3000)

            return true;




        }

    }

    return false;
}
const rrset = () => {
    boxes.forEach((box) => {
        box.innerHTML = "";

        box.style.pointerEvents = 'auto';
    })
    turn0 = true;
}
reset.addEventListener("click", () => {
    rrset();
})
closebtn.addEventListener("click", () => {
    winner.style.display = "none";

})
setInterval(() => {

}, 6000);
function checkTie() {

    let allFilled = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            allFilled = false;
            break;
        }
    }

    if (allFilled) {
        winner.style.display = "block";
        winner.innerText = "TIE!";
        rrset();
        setTimeout(() => {
            winner.style.display = "none";
            winner.innerText = "Winner";
        }, 2000)
        return true;
    }
    return false;

}
newbtn.addEventListener("click", () => {
    newgame();
});
const newgame = () => {
    rrset();
    player1 = 0;
    player2 = 0;
    player11.innerHTML = "PLAYER 1: " + player1;
    player22.innerHTML = "PLAYER 2: " + player2;
}



