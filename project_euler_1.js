//eueler 1//////

let sum = 0

for (i = 1; i < 1001; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
}

console.log(sum);

//////////Euler 2//////////////

const alist = [1, 2]

while (alist[alist.length - 1] < 4000000) {
    alist.push(alist[alist.length - 1] + alist[alist.length - 2]);
}

sum = 0;
console.log(alist)

for (elt of alist) {
    if (elt % 2 === 0) {
        sum += elt
    }
}

console.log('sum is ', sum)