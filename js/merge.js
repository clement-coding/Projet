//fusionner les chiffres identiques à droite
var mergeRight = function (arr, score) {
    let merged = false;    
    let bestMerge = getBestMerge();
    for (i = 3; i >= 0; i--) {
        for (j = 3; j > 0; j--) {
            if (arr[i][j] == arr[i][j - 1] && arr[i][j] != 0) {
                arr[i][j] = arr[i][j] + arr[i][j - 1];
                arr[i][j - 1] = 0;
                score.value += arr[i][j];
             

                if (arr[i][j] > bestMerge) {
                    document.cookie = "bestmerge=" + arr[i][j];
                }
                merged = true;
                
            }
        }
    }
    return merged;

}
//fusionner les chiffres identiques à gauche
var mergeLeft = function (arr, score) {
    let merged = false;    
    let bestMerge = getBestMerge();    
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 3; j++) {
            if (arr[i][j] == arr[i][j + 1] && arr[i][j] != 0) {
                arr[i][j] = arr[i][j] + arr[i][j + 1];
                arr[i][j + 1] = 0;
                score.value += arr[i][j]; 
                if (arr[i][j] > bestMerge) {
                    document.cookie = "bestmerge=" + arr[i][j];
                }
                merged = true; 
                                               
            }
        }
    }
    return merged;    
}
//fusionner les chiffres identiques en haut
var mergeUp = function (arr, score) {
    let merged = false;    
    let bestMerge = getBestMerge();    
    for (j = 0; j < 4; j++) {
        for (i = 0; i < 3; i++) {
            if (arr[i][j] == arr[i + 1][j] && arr[i][j] != 0) {
                arr[i][j] = arr[i][j] + arr[i + 1][j];
                arr[i + 1][j] = 0;
                score.value += arr[i][j]; 
                if (arr[i][j] > bestMerge) {
                    document.cookie = "bestmerge=" + arr[i][j];
                }
                merged = true;
                                                
            }
        }
    }
    return merged;    
}
//fusionner les chiffres identiques en bas
var mergeDown = function (arr, score) {
    let merged = false;    
    let bestMerge = getBestMerge();    
    for (j = 0; j < 4; j++) {
        for (i = 3; i > 0; i--) {
            if (arr[i][j] == arr[i - 1][j] && arr[i][j] != 0) {
                arr[i][j] = arr[i][j] + arr[i - 1][j];
                arr[i - 1][j] = 0;
                score.value += arr[i][j]; 
                if (arr[i][j] > bestMerge) {
                    document.cookie = "bestmerge=" + arr[i][j];
                }
                merged = true;  
                                                
            }
        }
    }
    return merged;    
}
//récupérer le cookie "bestscore"
var getBestMerge = function () {
    let bestMerge = 0;
    let cookies = document.cookie.split(";");
    cookies.forEach(function (cookie) {
        if (cookie.includes("bestmerge=")) {
            detail = cookie.split("=");
            bestMerge = detail[1];
        }
    })
    return bestMerge;
}
