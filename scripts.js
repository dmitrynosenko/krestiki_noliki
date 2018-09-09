var _Move = "firstPlayer"; // очередность хода


// Возвращает случайное число между min (включительно) и max (не включая max)
function GetRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function GetLetterByNumber(number) {
    if (number == 1) {
        return "f";
    }
    if (number == 2) {
        return "s";
    }
    if (number == 3) {
        return "t";
    }

}


function CheckWin(symbol) {
    if (document.getElementById("f1").value == symbol
        && document.getElementById("f2").value == symbol
        && document.getElementById("f3").value == symbol) {
        return true;
    }
    if (document.getElementById("s1").value == symbol
        && document.getElementById("s2").value == symbol
        && document.getElementById("s3").value == symbol) {
        return true;
    }
    if (document.getElementById("t1").value == symbol
        && document.getElementById("t2").value == symbol
        && document.getElementById("t3").value == symbol) {
        return true;
    }
    if (document.getElementById("f1").value == symbol
        && document.getElementById("s1").value == symbol
        && document.getElementById("t1").value == symbol) {
        return true;
    }
    if (document.getElementById("f2").value == symbol
        && document.getElementById("s2").value == symbol
        && document.getElementById("t2").value == symbol) {
        return true;
    }
    if (document.getElementById("f3").value == symbol
        && document.getElementById("s3").value == symbol
        && document.getElementById("t3").value == symbol) {
        return true;
    }
    if (document.getElementById("f1").value == symbol
        && document.getElementById("s2").value == symbol
        && document.getElementById("t3").value == symbol) {
        return true;
    }
    if (document.getElementById("f3").value == symbol
        && document.getElementById("s2").value == symbol
        && document.getElementById("t1").value == symbol) {
        return true;
    }
    return false;
}

function GetRandomId() {
    var numberLine = GetRandomArbitrary (1 , 4);
    var numberColomn = GetRandomArbitrary (1 , 4);
    var latterLine = GetLetterByNumber (numberLine);
    return latterLine + numberColomn;
}

function MoveComp () {

    var randomId = GetRandomId ();
    console.log(randomId);
    if (document.getElementById(randomId).value == " ") {
        document.getElementById(randomId).value = "0";
        document.getElementById(randomId).innerHTML = "0";
        _Move = "firstPlayer";
    }
    else {
        MoveComp();
    }
}

function MovePlayer (_id) { // функция принимающая id кнопки
    var _GameOver = true;  // конец игры
    console.log(_id, _Move, document.getElementById(_id)); //
    if (document.getElementById(_id).value == " ") {
        if (_Move == "firstPlayer") {
            document.getElementById(_id).value = "x";
            document.getElementById(_id).innerHTML = "x";
            _Move = "secondPlayer";
        }

    }
    for (i = 1; i <= 3; i++) {
        if (document.getElementById( "f" + i).value == " ") {
            _GameOver = false;
        }
    }

    for (i = 1; i <= 3; i++) {
        if (document.getElementById( "s" + i).value == " ") {
            _GameOver = false;
        }
    }


    for (i = 1; i <= 3; i++) {
        if (document.getElementById( "t" + i).value == " ") {
            _GameOver = false;
        }
    }

    if (CheckWin("x")){
        alert ("Крестики Выиграли!");
    }
    if (CheckWin("0")){
        alert ("Нолики Выиграли!");
    }



    if (_Move = "secondPlayer"){
        MoveComp();
    }
    console.log(_GameOver);
    if (_GameOver) {
        alert("Game over");
    }
}
 
