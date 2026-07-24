let turn = "X";
let finished = false;

let options = ["X", "", "", "", "", "", "", "", ""];


function choosingFigure(cell, index) {
    if (finished) return;

    if (cell.classList.contains("busy")) return;

    let orasm = cell.children[0];
    let xrasm = cell.children[1];

    if (turn === "X") {
        xrasm.classList.remove("hide");
        xrasm.classList.add("aktiv");
        turn = "O";
        document.querySelector("h2").innerText = "O ning navbati";
        options[index] = 'X';
    } else {
        orasm.classList.remove("hide");
        orasm.classList.add("aktiv");
        turn = "X";
        document.querySelector("h2").innerText = "X ning navbati";
        options[index] = 'O';
    }

    cell.classList.add("band");
    finished = check();
}

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


function check() {
    for (var i = 0; i < winConditions.length; i++) {
        var tmp = "";
        for (var j = 0; j < winConditions[i].length; j++) {
            if (options[winConditions[i][j]] == "") {
                tmp = "";
                break;
            } else if (tmp == "") {
                tmp = options[winConditions[i][j]];
            } else if (tmp != options[winConditions[i][j]]) {
                tmp = "";
                break;
            }
        }
        if (tmp != "") return true;
    }
    return false;
}