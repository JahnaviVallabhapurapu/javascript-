// var n = 5
// var col = 2 * n - 1
// // console.log(n)
// // console.log(col)
// var start = n
// var end = n
// for (var i = 0; i < n; i++) {
//     var flag = true
//     for (var j = 0; j < col; j++) {

//         if (j > start && j < end) {
//             if (flag) {
//                 process.stdout.write("*")
//                 flag = !flag
//             } else {
//                 process.stdout.write(" ")
//                 flag = !flag
//             }
//         } else {
//             process.stdout.write(" ")
//         }
//     }
//     start -= 1
//     end += 1
//     console.log()
// }
var n = 5
for (var i = 0; i < n; i++) {

    for (var j = 0; j < i; j++) {
        process.stdout.write("*")
    }
    console.log()
}


var a = 0
var b = 5
for (var i = 0; i < b; i++) {

    for (var j = 0; j < b; j++) {
        if (j <= i) {
            process.stdout.write(a + " ")

        }
        // console.log(a)
        a += 1
    }

    console.log()

}


var n = 5
var col = n
// var col = 2*n-1
// // console.log(n)
// // console.log(col)
// var start = n
// var end = n

// for(var i=0;i<n;i++){
//     var flag = true
//     for(var j=0;j<col;j++){

//         if(j>start && j<end){
//             if(flag){
//                 process.stdout.write("*")
//                 flag = !flag
//             }else{
//                 process.stdout.write(" ")
//                 flag = !flag
//             }
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     start-=1
//     end+=1
//     console.log()
// }


for (var i = 0; i < n; i++) {
    var chr = 'A'
    for (var j = 0; j < col; j++) {
        if (j <= i) {
            process.stdout.write(chr)
            let unicodeValue = chr.charCodeAt(0); // get the Unicode value of the character
            unicodeValue++; // increase the Unicode value
            let increasedChar = String.fromCharCode(unicodeValue);
            chr = increasedChar
        } else {
            process.stdout.write(" ")
        }
    }
    console.log()
}


