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

// Проверка линии на 2 клетки заняты определенным символом, а последняя пустая
function checkLineBySymbol(_id1, _id2, _id3, symbol) {
  if (document.getElementById (_id3).value == " "
      && document.getElementById (_id1).value == symbol
      && document.getElementById (_id2).value == symbol) {
    return _id3;
  }
  return "Empty";
}

// Проверка линии на выигрыш, т.е. разные вариации расположения символов (например: 1 и 3 заняты 0, а 2 пустая) 
function checkLineForWinBySym(_id1, _id2, _id3, symbol) {
  var moveId = checkLineBySymbol(_id1, _id2, _id3, symbol); // 1 и 2 клетка заняты, 3 пустая
  if (moveId == "Empty") { // проверка на пустоту id, выполняем с другой вариацией
      moveId = checkLineBySymbol(_id2, _id3, _id1, symbol); // 2 и 3 клетка заняты, 1 пустая
  }
  if (moveId == "Empty") {
      moveId = checkLineBySymbol(_id3, _id1, _id2, symbol); // 3 и 1 клетка заняты, 2 пустая
  }
  return moveId; // вернем id что получили
}

// поиск выигрышных линий для определенного символа
function zeroWin (symbol) {
  var moveId = checkLineForWinBySym("f1", "f2", "f3", symbol); // первая строка
  if (moveId == "Empty") {
      moveId = checkLineBySymbol("s1", "s2", "s3", symbol); // вторая строка
  }
  if (moveId == "Empty") {
      moveId = checkLineBySymbol("t1", "t2", "t3", symbol); // третья строка
  }
  if (moveId == "Empty") {
      moveId = checkLineBySymbol("f1", "s1", "t1", symbol); // первый столбец
  }
  if (moveId == "Empty") {
      moveId = checkLineBySymbol("f2", "s2", "t2", symbol); // второй столбец
  }
  if (moveId == "Empty") {
      moveId = checkLineBySymbol("f3", "s3", "t3", symbol); // третий столбец
  }
  if (moveId == "Empty") {
      moveId = checkLineBySymbol("f1", "s2", "t3", symbol); // диагональ слева (верх) - направо (низ)
  }
  if (moveId == "Empty") {
      moveId = checkLineBySymbol("f3", "s2", "t1", symbol); // диагональ слева (низ) - направо (верх)
  }
  return moveId;
}

function GetRandomId() {
var numberLine = GetRandomArbitrary (1 , 4);
var numberColomn = GetRandomArbitrary (1 , 4);
var latterLine = GetLetterByNumber (numberLine);
var randomId = latterLine + numberColomn;
if (document.getElementById(randomId).value != " ") {
return GetRandomId();
}
return randomId;
}

function DisplayAlert() {
  if (CheckWin("x")){
  alert ("Крестики Выиграли!");
  }
  if (CheckWin("0")){
  alert ("Нолики Выиграли!");
  }
}

function MoveComp () {
var moveCompId = "";
var zeroWinId = zeroWin ("0");
var crissWinId = zeroWin("x");
var randomId = GetRandomId ();
if (zeroWinId != "Empty") {
moveCompId = zeroWinId;
console.log ("Ты выиграл!");
}
else if (crissWinId != "Empty") {
moveCompId = crissWinId;
console.log ("крестики не выиграют!");
}
else {
moveCompId = randomId;
}
console.log(randomId);
document.getElementById(moveCompId).value = "0";
document.getElementById(moveCompId).innerHTML = "0";
DisplayAlert();
 _Move = "firstPlayer";
}
function MovePlayer(_id) { // функция принимающая id кнопки
var _GameOver = true; // конец игры
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
DisplayAlert();
if (_Move == "secondPlayer"){
MoveComp();
}
console.log(_GameOver);
if (_GameOver) {
alert("Game over");
}
}


function ReloadPage() {
    location.href=location.href;

}
