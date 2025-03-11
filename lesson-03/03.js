// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
    let largest = num1;
    if (num2 - num1 > 0 && num2 - num3 > 0) {
        largest = num2;
    } else if (num3 - num1 > 0 && num3 - num2 > 0) {
        largest = num3;
    }
    return largest;
}
