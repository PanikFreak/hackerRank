function aVeryBigSum(ar) {
    // Write your code here

const reducer = (previousValue, currentValue) => previousValue + currentValue;

let result = ar.reduce(reducer)
return result

}
