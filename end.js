var checkIfEnd = function (arr, score) {
    checkWon(arr, score);
    checkLost(arr, score);
}
//vérifier si le joueur a gagné
var checkWon = function (arr, score) {
    arr.forEach(function (row) {
        row.forEach(function (cell) {
            if (cell == 2048) {
                if (score.value > getBestScore) {
                    document.cookie = "bestscore=" + score.value;
                }
                alert("Vous avez gagné !!!");
                restart(arr, score);
            }
        });
    });
}
//vérifier si le joueur a perdu
var checkLost = function (arr, score) {
    if (!canMoveLeft(arr) && !canMoveDown(arr) && !canMoveRight(arr) && !canMoveUp(arr)) {
        let bestScore = getBestScore();
        if (score.value > bestScore) {
            document.cookie = "bestscore=" + score.value;
        }
        alert("Game over. Votre score final est " + score.value);
        restart(arr, score);
    }
}

//récupérer le cookie "bestscore"
var getBestScore = function () {
    let bestScore = 0;
    let cookies = document.cookie.split(";");
    cookies.forEach(function (cookie) {
        if (cookie.includes("bestscore=")) {
            detail = cookie.split("=");
            bestScore = detail[1];
        }
    })
    return bestScore;
}

function canMoveLeft(arr) {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (arr[i][j] != 0) {
                if (arr[i][j] == arr[i][j - 1] || arr[i][j - 1] == 0) {
                    return true;
                }
            }
        }
    }
    return false;
}
function canMoveRight(arr) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
            if (arr[i][j] != 0) {
                if (arr[i][j] == arr[i][j + 1] || arr[i][j + 1] == 0) {
                    return true;
                }
            }
        }
    }
    return false;
}
function canMoveUp(arr) {
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (arr[i][j] != 0) {
                if (arr[i][j] == arr[i - 1][j] || arr[i - 1][j] == 0) {
                    return true;
                }
            }
        }
    }
    return false;
}
function canMoveDown(arr) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
            if (arr[i][j] != 0) {
                if (arr[i + 1][j] == arr[i][j] || arr[i + 1][j] == 0) {
                    return true;
                }
            }
        }
    }
    return false;
}