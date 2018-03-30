//création du tableau qui correspond à grid html
var createArr = function () {
    var row1 = [0, 0, 0, 0];
    var row2 = [0, 0, 0, 0];
    var row3 = [0, 0, 0, 0];
    var row4 = [0, 0, 0, 0];
    var arr = [row1, row2, row3, row4];
    return arr;
}

//générer un nouveau numéro
function createNum(arr) {
    var X = Math.floor(Math.random() * 4);
    var Y = Math.floor(Math.random() * 4);
    while (arr[X][Y] != 0) {
        X = Math.floor(Math.random() * 4);
        Y = Math.floor(Math.random() * 4);
    }
    var value;
    if (Math.random() < 0.8) {
        value = 2;
    } else {
        value = 4;
    }
    arr[X][Y] = value;
}

//afficher le score
var displayScore = function (score) {
    $("#score").text(score);
    $("#bestscore").text(getBestScore());
    $("#bestnumber").text(getBestMerge());    
}

//remplir la grid html avec les valeurs du tableau
var fillGrid = function (arr) {
    id_col = "A";
    id_row = 0;
    id = id_col + id_row;
    arr.forEach(function (row) {
        row.forEach(function (cell) {
            if (cell != 0) {
                $("#" + id).text(cell).css({ backgroundColor: getBackColor(cell), color: getColor(cell), boxShadow: getBackShape(cell)  });
                
            } else {
                $("#" + id).text('').css({ backgroundColor: getBackColor(cell), color: getColor(cell), boxShadow: getBackShape(cell) });
            }
            id_col = incrementCol(id_col);
            id = id_col + id_row;
        })
        id_row++;
        id = id_col + id_row;
    })
}

//incrémenter l'indice de la colonne html
var incrementCol = function (id_col) {
    switch (id_col) {
        case "A":
            id_col = "B";
            break;
        case "B":
            id_col = "C";
            break;
        case "C":
            id_col = "D";
            break;
        case "D":
            id_col = "A";
            break;
    }
    return id_col;
}


 /*transform: getBigShape(cell)
 var x = document.getElementById(id); setTimeout(function() { x.style.transform="scale(1)";} , 80);

function getBigShape(arr){
console.log(arr);
switch(arr) {

        case 8: console.log(arr); return "scale(1.2)"; break;
        case 16: return "scale(1.2)"; break;
        case 32: return "scale(1.2)"; break;
        case 32: return "scale(1.2)"; break;
        case 48: return "scale(1.2)"; break;

}

}*/


//CHANGER LES COULEURS
function getBackColor(value) {
    switch (value) {
        case 0: return "#6ba9d9"; break;
        case 2: return "#a39799"; break;
        case 4: return "#a39799"; break;
        case 8: return "#b34457"; break;
        case 16: return "#eb4040"; break;
        case 32: return "#eb4040"; break;
    }
}
function getBackShape(arr) {
    switch (arr) {
        case 2: return "0px 0px 30px 10px";
    }
}


// fonction pour changer la couleur du texte
function getColor(arr) {
    if (arr > 4) {
        return "#f4eaec";
    } else {
        return "#490e18";
    }
}

//restart le jeu à la fin
var restart = function (arr, score) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            arr[i][j] = 0;
        }
    }
    createNum(arr);
    createNum(arr);
    fillGrid(arr);
    score.value = 0;
    displayScore(score.value);
}
