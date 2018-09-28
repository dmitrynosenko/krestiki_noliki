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

function zeroWin (s) {

if (document.getElementById ("f1").value == s
&& document.getElementById ("f2").value == s){

return "f3";
}

if (document.getElementById ("f2").value == s
&& document.getElementById ("f3").value == s){
return "f1";
}

if (document.getElementById ("f1").value == s
&& document.getElementById ("f3").value == s){
return "f2";
}

if (document.getElementById ("s1").value == s
&& document.getElementById ("s2").value == s){
return "s3";
}

if (document.getElementById ("s2").value == s
&& document.getElementById ("s3").value == s){
return "s1";
}

if (document.getElementById ("s1").value == s
&& document.getElementById ("s3").value == s){
return "s2";
}

if (document.getElementById ("t1").value == s
&& document.getElementById ("t2").value == s){
return "t3";
}

if (document.getElementById ("t2").value == s
&& document.getElementById ("t3").value == s){
return "t1";
}

if (document.getElementById ("t1").value == s
&& document.getElementById ("t3").value == s){
return "t2";
}


if (document.getElementById ("f1").value == s
&& document.getElementById ("s1").value == s){
return "t1";
}

if (document.getElementById ("f1").value == s
&& document.getElementById ("t1").value == s){
return "s1";
}

if (document.getElementById ("s1").value == s
&& document.getElementById ("t1").value == s){
return "f1";
}


if (document.getElementById ("f2").value == s
&& document.getElementById ("s2").value == s){
return "t2";
}

if (document.getElementById ("f2").value == s
&& document.getElementById ("t2").value == s){
return "s2";
}

if (document.getElementById ("s2").value == s
&& document.getElementById ("t2").value == s){
return "f2";
}



if (document.getElementById ("f3").value == s
&& document.getElementById ("s3").value == s){
return "t3";
}

if (document.getElementById ("f3").value == s
&& do
 
cument.getElementById ("t3").value == s){
return "s3";
}

if (document.getElementById ("s3").value == s
&& document.getElementById ("t3").value == s){
return "f3";
} 


if (document.getElementById ("f1").value == "s
&& document.getElementById ("s2").value == s){
return "t3";
}

if (document.getElementById ("s2").value == s
&& document.getElementById ("f3").value == s){
return "f1";
}

if (document.getElementById ("f1").value == s
&& document.getElementById ("t3").value == s){
return "s2";
}

if (document.getElementById ("f3").value == s
&& document.getElementById ("s2").value == s){
return "f1";
}

if (document.getElementById ("s2").value == s
&& document.getElementById ("f3").value == s){
return "t1";
}

if (document.getElementById ("f3").value == s
&& document.getElementById ("t1").value == s){
return "s2";
}

return "Empty";
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
_Move = "firstPlayer";
}

function MovePlayer (_id) { // функция принимающая id кнопки
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

 
