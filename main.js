let turn = "X";

function choosingFigure(cell){
    if (cell.classList.contains("band")) return;
    
    let orasm = cell.children[0];
    let xrasm = cell.children[1];

    if(turn === "X"){
        xrasm.classList.remove("hide");
        xrasm.classList.add("aktiv");
        turn = "O";
    }else {
        orasm.classList.remove("hide"); 
        orasm.classList.add("aktiv");
        turn = "X";
    }
    cell.classList.add("band");
}
