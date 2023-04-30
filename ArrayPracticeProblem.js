
let a = [];
let temp = 0;
for (let i = 0; i < 10; i++) {
    a[i] = Math.floor(Math.random() * 999) + 100;
}
for (let i = 0; i < 10; i++) {
   
    for (let j = i; j < 10; j++) {
        if (a[i] < a[j]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}
console.log("Second largest number is----->"+a[1]);
console.log("Second smallest number is----->"+a[a.length-2]);