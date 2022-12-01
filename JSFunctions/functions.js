

function FavoriteAnimal() {
    // code goes here! (also called a code block)
    var favAnimal = 'Falcon';

    return favAnimal;
}


FavoriteAnimal(); // 'Falcon'

// var result = FavoriteAnimal();

// console.log(result);
// console.log(FavoriteAnimal());


function addNum(num1, num2) {
    // Parameters start as empty variables.
    var sum = num1 + num2;

    if (sum < 10) {
        return 'The sum is smaller than 10!';
    } else {
        return sum;
    }
    // console.log(sum);
    return sum;
}

var result = addNum(4, 4);

// var result2 = addNum(addNum(4, 4), 4) + result

console.log(result);

