// task without Math


let i = 1;
while (i <= 100) {
    if (i === 50) {
        console.log("Half Way There!")
    } else if (i ===100) {
        console.log("You Made it!")
    } else if (i % 10 === 0) {
        console.log("Checkpoint! " + i)
    }
    i++;
}

// task with math 
let o = 1;
while (o <=100) {
    console.log(o);
    o = o + 2;
}
     
let sum = 0;
let num = 1;
while (num <= 100) {
    if (num % 2 !== 0) {
        sum = sum + num;
    }
    num++;
}
console.log(sum)
