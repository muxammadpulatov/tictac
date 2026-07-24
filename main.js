let turn = "X";
let finished = false;
let options = ["", "", "", "", "", "", "", "", ""];

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];

function choosingFigure(cell, index) {
    if (finished || cell.classList.contains("band")) return;

    let orasm = cell.children[0];
    let xrasm = cell.children[1];

    if (turn === "X") {
        xrasm.classList.remove("hide");
        xrasm.classList.add("aktiv");
        options[index] = 'X';
        turn = "O";
        document.querySelector("h2").innerText = "O ning navbati";
    } else {
        orasm.classList.remove("hide");
        orasm.classList.add("aktiv");
        options[index] = 'O';
        turn = "X";
        document.querySelector("h2").innerText = "X ning navbati";
    }

    cell.classList.add("band");

    let winningLine = check(); 

    if (winningLine) {
        finished = true;
        let winner = turn === "X" ? "O" : "X";
        document.querySelector("h2").innerText = `${winner} g'alaba qozondi!`;

        const cells = document.querySelectorAll('.cell');
        winningLine.forEach(idx => cells[idx].classList.add('winner-flash'));
    } else if (!options.includes("")) {
        finished = true;
        document.querySelector("h2").innerText = "Durang!";
    }
}

function check() {
    return winConditions.find(condition => {
        const [a, b, c] = condition;
        return options[a] !== "" && options[a] === options[b] && options[a] === options[c];
    }) || false;
}