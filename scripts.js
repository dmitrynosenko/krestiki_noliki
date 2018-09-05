var _Move = "firstPlayer"
MovePlayer = function (_id) {
    if (DOM.findById (_id).getValue () == ""){
        return 0;
    }
    if (_Move == "firstPlayer") {
        DOM.findById (_id).setValue ("x");
        _Move = "secondPlayer";
    }
    else {
        DOM.getElementById(_id).setValue ("0");
        _Move = "firstPlayer";

    }
}

document.getElementById(#f1).setValue







//
// if (DOM.getElementById(_id).getValue() == ""){
//     return 0;
// }
