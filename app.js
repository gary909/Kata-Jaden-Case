// String.prototype.toJadenCase = function () {
//     let splitStr = this.toLowerCase().split(' ');
//       for (let i = 0; i < splitStr.length; i++) {
//           splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//       }
//       return splitStr.join(" ");
//   };

function jadenCase(s) {
    var splitStr = s.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
}

console.log(jadenCase("How can mirrors be real if our eyes aren't real"));
// "How Can Mirrors Be Real If Our Eyes Aren't Real"