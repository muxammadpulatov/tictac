let choosen = 0;

function choosingFigure(){
    let xrasm = document.getElementById("xrasm");
    let orasm = document.getElementById("orasm");

    choosen++;

    if(choosen === 1){
        xrasm.classList.add("aktiv");
        orasm.classList.remove("aktiv");
    }else if (choosen === 2){
        xrasm.classList.remove("aktiv");
        orasm.classList.add("aktiv");
    }else{
        xrasm.classList.remove("aktiv");
        orasm.classList.remove("aktiv");
        choosen = 0;
    }
}
