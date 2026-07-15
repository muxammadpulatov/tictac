let turn = "X";

function choosingFigure(cell) {
    if (cell.classList.contains("busy")) return;

    let orasm = cell.children[0];
    let xrasm = cell.children[1];

    if (turn === "X") {
        xrasm.classList.remove("hide");
        xrasm.classList.add("aktiv");
        turn = "O";
        document.querySelector("h2").innerText = " O ning navbati"
    } else {
        orasm.classList.remove("hide");
        orasm.classList.add("aktiv");
        turn = "X";
        document.querySelector("h2").innerText = " X ning navbati"
    }
    cell.classList.add("band");
}


