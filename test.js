function map(array, callback) {
    const newArr = [];
 
    for (const element of array) {
        newArr.push(callback(element));
    }
}

const originalNumbers = [1, 2, 3, 4, 5];
 
const squaredNumbers = map(originalNumbers, function(num) {
    return num * num;
});
 
puts originalNumbers;