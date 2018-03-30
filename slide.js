//faire glisser tous les chiffres à droite
var slideRight = function (arr) {
    let slided = false;
    var temp = new Array();
    var zeros = new Array();
    var templen = 0;
    var i = 0;
    arr.forEach(function (row) {
        temp = [];
        zeros = [];
        row.forEach(function (cell) {
            if (cell != 0) {
                temp.push(cell);
            }
        })
        for (templen = temp.length; templen < 4; templen++) {
            zeros.push(0);
        }
        row = zeros.concat(temp);
        if (!arrayIsEqual(arr[i], row)) {
            arr[i] = row;
            slided = true;
        }
        i++;
    });
    return slided;
}
//faire glisser tous les chiffres à gauche
var slideLeft = function (arr) {
    let slided = false;
    var temp = new Array();
    var zeros = new Array();
    var templen = 0;
    var i = 0;
    arr.forEach(function (row) {
        temp = [];
        zeros = [];
        row.forEach(function (cell) {
            if (cell != 0) {
                temp.push(cell);
            }
        })
        for (templen = temp.length; templen < 4; templen++) {
            zeros.push(0);
        }
        row = temp.concat(zeros);
        if (!arrayIsEqual(arr[i], row)) {
            arr[i] = row;
            slided = true;
        }
        i++;
    });
    return slided;
}
//faire glisser tous les chiffres en haut
var slideUp = function (arr) {
    let slided = false;
    var temp = new Array();
    var zeros = new Array();
    var col = new Array();
    var templen = 0;
    for (j = 0; j < 4; j++) {
        temp = [];
        zeros = [];
        for (i = 0; i < 4; i++) {
            if (arr[i][j] != 0) {
                temp.push(arr[i][j]);
            }
        }
        for (templen = temp.length; templen < 4; templen++) {
            zeros.push(0);
        }
        col = temp.concat(zeros);
        for (i = 0; i < 4; i++) {
            if (arr[i][j] != col[i]) {
                arr[i][j] = col[i];
                slided = true;
            }
        }
    }
    return slided;
}
//faire glisser tous les chiffres en bas
var slideDown = function (arr) {
    let slided = false;
    var temp = new Array();
    var zeros = new Array();
    var col = new Array();
    var templen = 0;
    for (j = 0; j < 4; j++) {
        temp = [];
        zeros = [];
        for (i = 0; i < 4; i++) {
            if (arr[i][j] != 0) {
                temp.push(arr[i][j]);
            }
        }
        for (templen = temp.length; templen < 4; templen++) {
            zeros.push(0);
        }
        col = zeros.concat(temp);
        for (i = 0; i < 4; i++) {
            if (arr[i][j] != col[i]) {
                arr[i][j] = col[i];
                slided = true;
            }
        }
    }
    return slided;
}

//comparer 2 arrays
function arrayIsEqual(arr1, arr2) {
    var type = Object.prototype.toString.call(arr1);
    if (type !== Object.prototype.toString.call(arr2)) {
        return false;
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        if (compare(arr1[i], arr2[i]) === false) return false;
    }
    return true;
}
//comparer 2 valeurs
function compare(a, b) {
    var itemType = Object.prototype.toString.call(a);
    if (['[object Array]'].indexOf(itemType) >= 0) {
        if (!arrayIsEqual(a, b)) return false;
    } else {
        if (itemType !== Object.prototype.toString.call(b)) return false;
        if (a !== b) return false;
    }
    return true;
}
