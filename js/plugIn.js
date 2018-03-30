(function ($) {
    $.fn.plugIn = function () {
        return this.each(function () {
            //METTRE LE CODE PRINCIPAL ICI
            var score = { value: 0 };
            var arr = createArr();
            createNum(arr);
            createNum(arr);
            fillGrid(arr);
            displayScore(score.value);
            let bestScore = getBestScore();
            if (bestScore == "undefined") {
                document.cookie = "bestscore=" + score.value;
            }
            let bestMerge = getBestMerge();
            if (bestMerge == "undefined") {
                document.cookie = "bestmerge=0";
            }
            document.onkeydown = function (e) { move(e, arr, score); };
        });
    };
})(jQuery);

//gérer les actions en fonction de la touche pressée
var move = function (e, arr, score) {
    let merged = false;
    let slided = false;
    if (e.keyCode == '38') { //UP
        slided = slideUp(arr);
        merged = mergeUp(arr, score);
        slideUp(arr);
    }
    else if (e.keyCode == '40') { //DOWN
        slided = slideDown(arr);
        merged = mergeDown(arr, score);
        slideDown(arr);
    }
    else if (e.keyCode == '37') { //LEFT
        slided = slideLeft(arr);
        merged = mergeLeft(arr, score);
        slideLeft(arr);
    }
    else if (e.keyCode == '39') { //RIGHT
        slided = slideRight(arr);
        merged = mergeRight(arr, score);
        slideRight(arr);
    }
    if (e.keyCode == '38' || e.keyCode == '40' || e.keyCode == '37' || e.keyCode == '39') {
        if (merged || slided) {
            createNum(arr);
            fillGrid(arr);
            displayScore(score.value);
            checkIfEnd(arr, score);
        }
    
    }

}