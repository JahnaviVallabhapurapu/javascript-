


// // console.log(a)
// // var a = 10
// // console.log(a)

// // console.log(a)
// // let a = 20
// // console.log(a)



// // console.log(a)
// // const a = 10
// // console.log(a)

// // var a = 10
// // var a = 20
// // a = 21


// // let x = 10
// // // let x = 11
// // x=23



// // const c = 90
// // c=91
// // const c = 78




// // var arr = [10,20,30,40,50]

// // for(var i=0;i<arr.length;i++){
// //     console.log(arr[i])
// // }

// // var x = 0
// // while(x<10){
// //     console.log(x)
// //     x+=1
// // }
// var max = 100
// var min = 50
// var x = (Math.floor(Math.random() * (max-min)))

// while(x!=5){
//     console.log(x)
//     var x = (Math.floor(Math.random() * (max-min)))
// }


// do{
//     console.log(x)
// }while(x!=5)




// var arr = [1,2,4]

// function arrHandler(arg1,arg2,arg3){
//     console.log(arg1,arg2,arg3)
// }
// arr.forEach(arrHandler)



// var x = new Map()
// x.set('name',"sudhanshu")
// x.set('age',24)
// function mapHandler(arg1,arg2,arg3){
//     console.log(arg1,arg2,arg3)
// }
// x.forEach(mapHandler)


// var arr = [1,2,3,7,2,3,4]
// var x = new Set(arr)

// function setHandler(arg1,arg2,arg3,arg4){
//     console.log(arg1,arg2,arg3,arg4)
// }

// x.forEach(setHandler)


// var arr = [13,25,637,84,5,6,7]


// for(ele of arr){
//     console.log(ele)
// }

// for(i in arr){
//     console.log(arr[i])
// }




// var x = 39

// if(x%2==0){
//     console.log("even")
// }else if(x<5){
//     console.log("x is less than 5")
// }else{
//     console.log("nothing happend")
// }



// function doJob(){
//     return new Promise(function fun(accept,reject){
//         setTimeout(()=>{
//             var flag = 10
//             if(flag === 10){
//                 return new Promise(function fun(accept,reject){
//                     var flag = true
//                     if(flag === true){
//                         accept()
//                     }else{
//                         reject()
//                     }
//                 })
//             }else{
//                 reject()
//             }
//         },1000)
//     })
// }

// var myPromise = doJob()

// myPromise.then(
//     function(){
//         console.log("accepting the promise")
//     }
// ).catch(
//     function(){
//         console.log("rejecting the promise")
//     }
// )



// (()=>{

// })()






// const num1 = 5;
// const num2 = 3;

// // add two numbers
// const sum = num1 + num2;

// // display the sum
// console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

// var a = num1 - num2;

// console.log(a);
// console.log(a);


// function doJob() {
//     return new Promise(function fun(accept, reject) {
//         setTimeout(() => {
//             var flag = 10
//             if (flag === 10) {
//                 // accept()
//                 return new Promise(function fun(accept, reject) {
//                     var flag = true
//                     if (flag === true) {
//                         accept()
//                     } else {
//                         reject()
//                     }
//                 })
//             } else {
//                 reject()
//             }
//         }, 1000)
//     })
// }

// var myPromise = doJob()

// myPromise.then(
//     function () {
//         console.log("accepting the promise")
//     }
// ).catch(
//     function () {
//         console.log("rejecting the promise")
//     }
// )


