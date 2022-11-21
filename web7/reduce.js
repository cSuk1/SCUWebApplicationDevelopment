var numbers = [1, 3, 5, 7, 9];
function getSum(res, el) {
    res = res * 10;
    return res + el;
}
console.log(numbers.reduce(getSum))