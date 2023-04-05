// function doJob() {
//     return new Promise(function (accept, reject) {
//         setTimeout(() => {
//             var flag = 10;
//             if (flag === 10) {
//                 accept(true);
//             } else {
//                 reject(false);
//             }
//         }, 1000);
//     });
// }

// var myPromise = doJob();

// myPromise
//     .then(function () {
//         console.log("accepting the promise");
//     })
//     .catch(function () {
//         console.log("rejecting the promise");
//     });


function doJob() {
    return new Promise(function fun(accept, reject) {
        setTimeout(() => {
            var flag = 10;
            if (flag === 100) {
                // accept()
                return new Promise(function fun(accept, reject) {
                    var flag = 25
                    if (flag === 2) {
                        accept(console.log("passedin inner loop"));
                    } else {
                        reject(console.log("failed in inner loop"));
                    }
                })
            } else {
                reject();
            }
        }, 9000);
    });
}

var myPromise = doJob();
myPromise
    .then(function () {
        console.log("accepting the promise");
    })
    .catch(function () {
        console.log("rejecting the promise");
    });


//promiss example 3 
// function doJob() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             var flag = 10;
//             if (flag === 10) {
//                 reject(new Error("flag is 10"));

//             } else {
//                 resolve();
//             }
//         }, 1000);
//     }).then(function () {
//         var flag = true;
//         if (flag === true) {
//             return Promise.resolve();
//         } else {
//             return Promise.reject(new Error("flag is not true"));
//         }
//     });
// }

// var myPromise = doJob();
// myPromise
//     .then(function () {
//         console.log("resolved");
//     })
//     .catch(function (error) {
//         console.log("rejected: " + error.message);
//     });

