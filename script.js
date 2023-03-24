//console.log("Hey!");

let promise_1 = new Promise(function(resolve, reject) {
    let random_1 = Math.random();
    if (random_1 > 0.5) {
        resolve("Крутяк!");
    } else {
        reject("Непруха(");
    }
});

let promise_2 = new Promise(function(resolve, reject) {
    let random_2 = Math.random();
    if (random_2 > 0.2) {
        resolve("Чел, хорош!");
    } else {
        reject("Не хорош(");
    }
})

promise_1
.then(function(result) {
    console.log(result);
    return promise_2;
})  

.then(function(result2) {
    console.log(result2);
    console.log("На сегодня все)");
})

.catch(function(error) {
    console.warn(error);
})

//console.log(promise_1);