// let a = +prompt("Birinchi sonni kiriting")
// let b = +prompt("Ikkinchi sonni kiriting")
// let c = prompt("Amalni tanlang + - * / %")

// if (c == "qo'sh" || c == "+") {
//     alert(a + b)
//     console.log(a + b);
// } 
// else if (c == "ayir" || c == "-") {
//     alert(a - b)
//     console.log(a - b);
// }
// else if (c == "ko'paytir" || c == "*") {
//     alert(a * b)
//     console.log(a * b);
// }
// else if (c == "bo'l" || c == "/") {
//     alert(a / b)
//     console.log(a / b);
// }
// else if (c == "q-li bo'l" || c == "%") {
//     alert(a % b)
//     console.log(a % b);
// }


// let x = prompt("Raqamni kiriting")

// if (x % 2 == 0) {
//     console.log("bu raqam juft");
//     alert("bu raqam juft")
// }
// else {
//     console.log("bu raqam toq");
//     alert("bu raqam toq")
// }


// ------------------------------------------------------------------------------------------------------------------------- //


function dclick() {
    document.querySelector('body').style.backgroundColor = "#000";
    document.getElementById('dark').style.backgroundColor = "#fff";
    document.getElementById('dark').style.color = "#000";
    document.getElementById('light').style.backgroundColor = "#fff";
    document.getElementById('light').style.color = "#000";
}
function lclick() {
    document.querySelector('body').style.backgroundColor = "#fff";
    document.getElementById('dark').style.backgroundColor = "#000";
    document.getElementById('dark').style.color = "#fff";
    document.getElementById('light').style.backgroundColor = "#000";
    document.getElementById('light').style.color = "#fff";
}