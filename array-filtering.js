var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

number = number.filter((numbers)=> {
    return numbers % 2 === 0;
});

console.log(number);